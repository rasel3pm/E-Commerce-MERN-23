const UserProfileSave = require("../services/UserService")
exports.CreateProfile = async (req, res) => {
  let result = await UserProfileSave(req)
  return res.status(200).json(result)
};

exports.ReadProfile = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "UserLogin",
  });
};

exports.UpdateProfile = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "UserLogin",
  });
};
