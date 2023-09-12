const WishModel = require("../models/WishModel")
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const CreateWish = async (req) => {
  try{
      let user_id = req.headers.id
      let reqBody = req.body
      reqBody.userID= user_id
      await WishModel.updateOne({userID:user_id,productID:reqBody.productID},{$set:reqBody},{upsert:true})
      return {status:"success", message:"Wish List Created"}
  }catch (e) {
      return {status:"fail", message:"Something Went Wrong"}
  }
}
const RemoveWish = async (req) => {
    try{
        let user_id = req.headers.id
        let reqBody = req.body //product id
        reqBody.userID= user_id
        await WishModel.deleteOne({userID:user_id,productID:reqBody.productID})
        return {status:"success", message:"Wish List Deleted"}
    }catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}

const Wish = (req) => {
  try{
      let user_id= new Object(req.headers.id)
      let matchStage = {$match:{userID:user_id}}
      let JoinStageProduct= {$lookup:{from:"products",localField:"productID",foreignField:"_id",as:"product"}}
  }catch (e) {
      return {status:"fail", message:"Something Went Wrong"}
  }
}


module.exports={CreateWish,RemoveWish,Wish}