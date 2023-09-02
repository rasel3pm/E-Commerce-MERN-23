const UserOTP = async (code, email, dataModel) => {
  await dataModel.updateOne(
    { email: email },
    { $set: { otp: code } },
    { upsert: true }
  );
};
module.exports = UserOTP;
