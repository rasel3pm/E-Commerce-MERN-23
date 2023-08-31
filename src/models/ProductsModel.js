const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        short_des: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        discount: {
            type: String,
        },
        discount_Price: {
            type: String
        },
        image: {
            type: String,
            required: true,
        },
        stock: {
            type: Boolean,
        },
        start: {
            type: String,
            required: true,
        },
        remark: {
            type: String,
            enum:['popular','new','top','special','trending','regular']
        },
        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        brand_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
    },
    {timestamps:true,versionKey:false}
);

const Product = mongoose.model("products", DataSchema);
module.exports = Product;
