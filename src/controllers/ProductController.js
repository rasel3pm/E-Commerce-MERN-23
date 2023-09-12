const {CreateWish, RemoveWish} = require("../services/WishService");
const {ProductByRemarks, ProductBySlider, ProductByCategory, ProductByCategoryLimit10, ProductByBrand, ProductByKeyword} = require("../services/ProductService");

exports.SliderList = async (req, res) => {
  let result = await ProductBySlider(req)
  return res.status(200).json(result);
};

exports.ListByCategory = async (req, res) => {
  let result = await ProductByCategory(req)
  return res.status(200).json(result);
};

exports.ListBySmilier = async (req, res) => {
let result = await ProductByCategoryLimit10(req)
  return res.status(200).json(result);
};

exports.ListByBrand = async (req, res) => {
  let result = await ProductByBrand(req)
  return res.status(200).json(result);
};

exports.ListByKeyword = async (req, res) => {
  let result = await ProductByKeyword(req)
  return res.status(200).json(result);
};

exports.ListReview = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "ListReview",
  });
};

exports.ProductDetails = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "ProductDetails",
  });
};

exports.ListByRemark = async (req, res) => {
  let result = await ProductByRemarks(req)
  return res.status(200).json(result);
};

exports.WishList = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "WishList",
  });
};

exports.CreateWishList = async (req, res) => {
  let result = await CreateWish(req)
  return res.status(200).json(result)
};

exports.RemoveWishList = async (req, res) => {
  let result = await RemoveWish(req)
  return res.status(200).json(result);
};

exports.CartList = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "CartList",
  });
};

exports.CreateCartList = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "CartList",
  });
};

exports.RemoveCartList = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "CartList",
  });
};
