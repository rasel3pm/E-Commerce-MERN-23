const SendEmailUtility = require("../utility/SendMail")
const UserModel = require("../models/UserModel");
const { EncodedToken } = require("../utility/TokenHelper");
const UserOTP = async (req)=>{
    try {
        let email = req.params.email;
        let code = Math.floor(100000 + Math.random() * 900000);
        let EmailText = "Your verification code is " + code;
        await SendEmailUtility(email, EmailText, "Email Verification With PIN");
        await UserModel.updateOne({email:email},{$set:{otp:code}},{upsert:true})

        return res.status(200).json({ status: "success", message: "Email Sent" });
    } catch (error) {
      return res
        .status(200)
        .json({ status: "fail", message: "Something went wrong" });
    }
}

const UserVerify = async (req)=>{
    try {
        let email = req.params.email;
        let otp = req.params.otp;
        if(code === "0"){
            return {status:"fail",message:"Something went wrong"}
        }else{
            let total = await UserModel.find({email:email},{otp:code}).count('total')
            if (total === 1){
                let user_id = await UserModel.find({email:email},{otp:code}).select('_id')
                let token = EncodedToken(email,user_id[0]['_id'].toString())
                await UserModel.updateOne({email:email},{$set:{otp:'0'}},{upsert:true})
                return res.status(200).json({success: true,message: "Valid OTP",token: token,});
            }else{
                return {status:"fail",message:"Something went wrong"}
            }
        }
    } catch (error) {
        return {status:"fail",message:"Something went wrong"}
    }
}

const UserProfileSave=async (req)=>{
    try {
        let user_id = req.headers.id 
        let reqBody = req.body 
        reqBody.userID = user_id
        await ProfileModel.updateOne({userID:user_id},{$set:reqBody}, {upsert:true})
        return {status:"success",message:"Profile Save Changed"}
    } catch (e) {
        return {status:"fail",message:"Something went wrong"}
    }
}

module.exports={UserOTP,UserVerify,UserProfileSave}