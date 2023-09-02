const UserVerify = async (code, email, dataModel) => {
  if (code === "0") {
    return 0;
  } else {
    return await dataModel.find({ email: email, otp: code }).count("total");
  }
};

module.exports = UserVerify;
