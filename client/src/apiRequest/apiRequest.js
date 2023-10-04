import axios from "axios"
const BASEURL = "http://localhost:5000/api/v1"
export const BrandListRequest = async ()=>{
    try {
        let result = await axios.get(BASEURL+"/BrandList")
        let data = result.data['data']
        return data
    }catch (e) {
        return []
    }
}
export const CategoryListRequest = async ()=>{
    try {
        let result = await axios.get(BASEURL+"/CategoryList")
        let data = result.data['data']
        return data
    }catch (e) {
        return []
    }
}
export const ProductListByRemarkRequest = async (Remark)=>{
    try {
        let result = await axios.get(BASEURL+"/ListByRemark/"+Remark)
        let data = result.data['data']
        console.log(data)
        return data
    }catch (e) {
        return []
    }
}

