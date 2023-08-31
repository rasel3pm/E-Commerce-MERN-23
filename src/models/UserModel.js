const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required:true,
            unique:true,
            split:true,
        },
        otp: {
            type: String,
            required:true
        },
    },
    {timestamps:true,versionKey:false}
);

const User = mongoose.model("users", DataSchema);
module.exports = User;
