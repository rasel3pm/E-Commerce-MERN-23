const processInvoice = require("../services/InvoiceService")
exports.InvoiceCreate = async (req, res) => {
  let result = await processInvoice(req)
  return res.status(200).json(result);
};





exports.InvoiceList = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "InvoiceCreate",
  });
};

exports.InvoiceProductList = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "InvoiceCreate",
  });
};

exports.PaymentSuccess = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "InvoiceCreate",
  });
};

exports.PaymentFail = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "InvoiceCreate",
  });
};

exports.PaymentCancel = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "InvoiceCreate",
  });
};

exports.PaymentIPN = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "InvoiceCreate",
  });
};
