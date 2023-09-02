const jwt = require("jsonwebtoken");
exports.EncodedToken = (email) => {
  return jwt.sign({ email: email }, process.env.JWT_SECRATE, {
    expiresIn: "1h",
  });
};

//decoded token
exports.DecodeToken = (token) => {
  try {
    jwt.verify(token, process.env.JWT_SECRATE);
  } catch (err) {
    return null;
  }
};
