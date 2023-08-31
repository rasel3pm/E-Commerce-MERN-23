const mongoose = require("mongoose")
const DataSchema = mongoose.Schema(
    {
        img1: {
            type: String,
            required: true,
        },
        img2: {
            type: String,
        },
        img3: {
            type: String,
        },
        img4: {
            type: String,
        },
        des: {
            type: String
        },
        color: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            required: true,
        },
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
    },
    {timestamps:true,versionKey:false}
);

const ProductDetails = mongoose.model("productDetails", DataSchema);
module.exports = ProductDetails;