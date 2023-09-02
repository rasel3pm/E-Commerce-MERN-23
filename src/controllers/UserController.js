const SendEmailUtility = require("../utility/SendMail");
const UserOTP = require("../services/UserService/UserOTP");
const UserModel = require("../models/UserModel");
const UserVerify = require("../services/UserService/UserVerify");
const { EncodedToken } = require("../services/UserService/TokenHelper");
exports.UserLogin = async (req, res) => {
  let email = req.params.email;
  let code = Math.floor(100000 + Math.random() * 900000);
  let EmailText = "Your verification code is " + code;
  try {
    await SendEmailUtility(email, EmailText, "Email Verification With PIN");
    await UserOTP(code, email, UserModel);
    return res.status(200).json({ status: "success", message: "Email Sent" });
  } catch (error) {
    console.log(err);
    return res
      .status(200)
      .json({ status: "fail", message: "Something went wrong" });
  }
};

exports.VerifyLogin = async (req, res) => {
  // Extract email and OTP (One-Time Password) from the request parameters
  let email = req.params.email;
  let otp = req.params.otp;
  // Call the UserVerify function to verify the OTP and email
  let verify = await UserVerify(otp, email, UserModel);
  // Check if the OTP is valid (UserVerify returns 1 for valid OTP)
  if (verify === 1) {
    // Generate a JWT (JSON Web Token) for the user's email
    let token = EncodedToken(email);
    // Set the user's OTP to "0" to indicate it has been used
    await UserOTP("0", email, UserModel);
    // Return a success response with the generated token
    return res.status(200).json({
      success: true,
      message: "Valid OTP",
      token: token,
    });
  } else {
    // Return a failure response for an invalid OTP
    return res.status(200).json({
      success: false,
      message: "Invalid OTP",
    });
  }
};

exports.UserLogout = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "UserLogout",
  });
};
