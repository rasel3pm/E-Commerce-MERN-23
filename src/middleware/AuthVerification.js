const { DecodeToken } = require("../services/UserService/TokenHelper");
const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  let token = req.headers["token"];
  // let decoded = DecodeToken(token);
  let decoded = jwt.verify(token, process.env.JWT_SECRATE);
  console.log(decoded);

  if (decoded === null) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  } else {
    let email = decoded["email"];
    let id = decoded["id"];
    req.headers.email = email;
    req.headers.id = id;
    next();
  }
};
