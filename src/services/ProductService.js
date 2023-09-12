const CategoryModel = require("../models/CategoryModel")
const BrandModel = require("../models/BrandModel")
const ProductsModel = require("../models/ProductsModel")
const ProductSliderModel = require("../models/ProductSliederModel")
const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId

//aggregate stage define
let categoryJoin = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}}
let brandJoin = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}}
let unwindCategory = {$unwind:"$category"}
let unwindBrand = {$unwind:"$brand"}
let projectionStage = {$project:{'category._id':0,'brand._id':0,'categoryID':0,'brandID':0,'remark':0}}
const AllCategory =async (req) => {
  try{
      let data = await CategoryModel.find()
      return {status:"Success",data:data}
  }catch (e) {
      return {status:"fail",message:"Something went wrong"}
  }
}
const AllBrands =async (req) => {
    try{
        let data = await BrandModel.find()
        return {status:"Success",data:data}
    }catch (e) {
        return {status:"fail",message:"Something went wrong"}
    }
}
const ProductByRemarks = async (req) => {
  try{
      let remark = req.params.remark
      let matchStage = {$match:{remark: remark}}
      let data = await ProductsModel.aggregate(
          [matchStage,categoryJoin,brandJoin,unwindCategory,unwindBrand,projectionStage]
      )
      return {status:"Success",data:data}
  }catch (e) {
      return {status:"fail",message:"Something went wrong",error:e}
  }
}
const ProductByCategory = async (req) => {
    try{
        let categoryID = new ObjectId(req.params.categoryID)
        let matchStage = {$match:{categoryID: categoryID}}
        let data = await ProductsModel.aggregate(
            [matchStage,categoryJoin,brandJoin,unwindCategory,unwindBrand,projectionStage]
        )
        return {status:"Success",data:data}
    }catch (e) {
        return {status:"fail",message:"Something went wrong",error:e}
    }
}
const ProductByBrand = async (req) => {
    try{
        let brandID = new ObjectId(req.params.brandID)
        let matchStage = {$match:{brandID: brandID}}
        let data = await ProductsModel.aggregate(
            [matchStage,categoryJoin,brandJoin,unwindCategory,unwindBrand,projectionStage]
        )
        return {status:"Success",data:data}
    }catch (e) {
        return {status:"fail",message:"Something went wrong",error:e}
    }
}
const ProductByCategoryLimit10 = async (req) => {
    try{
        let categoryID = new ObjectId(req.params.categoryID)
        let matchStage = {$match:{categoryID: categoryID}}
        let limit = {$limit:10}
        let data = await ProductsModel.aggregate(
            [matchStage,limit,categoryJoin,brandJoin,unwindCategory,unwindBrand,projectionStage]
        )
        return {status:"Success",data:data}
    }catch (e) {
        return {status:"fail",message:"Something went wrong",error:e}
    }
}
const ProductBySlider = async (req) => {
    try{
        let matchStage = {$match:{}}
        let limit = {$limit:10}
        let data = await ProductSliderModel.aggregate(
            [matchStage,limit]
        )
        return {status:"Success",data:data}
    }catch (e) {
        return {status:"fail",message:"Something went wrong",error:e}
    }
}
const ProductByKeyword = async (req) => {
    try{
        let searchRegex = {"$regex":req.params.keyword,"$options":"i"}
        let searchParams = [{title:searchRegex},{shortDes:searchRegex}]
        let searchQuery = {$or:searchParams}
        let matchStage = {$match:searchQuery}
        let data = await ProductsModel.aggregate(
            [matchStage,categoryJoin,brandJoin,unwindCategory,unwindBrand,projectionStage]
        )
        return {status:"Success",data:data}
    }catch (e) {
        return {status:"fail",message:"Something went wrong",error:e}
    }
}


module.exports={
    AllCategory,
    AllBrands,
    ProductByRemarks,
    ProductByCategory,
    ProductByBrand,
    ProductByCategoryLimit10,
    ProductBySlider,
    ProductByKeyword
}