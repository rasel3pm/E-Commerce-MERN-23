const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
    {
        total: {
            type: String,
            required: true,
        },
        vat: {
            type: String,
            required: true,
        },
        payable: {
            type: String,
            required: true,
        },
        cus_details: {
            type: String,
            required: true,
        },
        ship_details: {
            type: String,
            required: true,
        },
        tran_id: {
            type: String,
            required: true,
        },
        delivery_status: {
            type: String,
            enum: ['pending','delivery']
        },
        payment_status: {
            type: String,
            required: true,
        },
        user_id:{
            type : mongoose.Schema.Types.ObjectId
        }
    },
    {timestamps:true,versionKey:false}
);

const Invoice = mongoose.model("invoices", DataSchema);
module.exports = Invoice;
