import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ProductBySearchRequest} from "../apiRequest/apiRequest.js";
import Master from "../components/Master.jsx";
import ProductsSkeleton from "../components/loader/CartListSkeleton.jsx";
import ProductList from "../components/ProductList.jsx";

const ProductBySearch = () => {
  const [data,setData]=useState([])
  let {keyword}= useParams()
  useEffect(()=>{
    (async ()=>{
      let result = await ProductBySearchRequest(keyword)
      setData(result)
    })()
  },[data])
  if(data.length===0){
    return (
        <Master>
          <ProductsSkeleton/>
        </Master>
    )
  }else {
    return (
        <Master>
          <ProductList data={data}/>
        </Master>
    )
  }

  return <div></div>;
};

export default ProductBySearch;
