const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId
        },
        product_id: {
            type: mongoose.Schema.Types.ObjectId
        },
        color:{
            type:String,
            required:true
        },
        size:{
            type:String,
            required:true
        },
        qty:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        }
    },
    {timestamps:true,versionKey:false}
);

const ProductsCarts = mongoose.model("productsCarts", DataSchema);
module.exports = ProductsCarts;
