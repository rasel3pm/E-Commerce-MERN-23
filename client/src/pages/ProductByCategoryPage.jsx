import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductByCategoryRequest } from "../apiRequest/apiRequest";
import Master from "../components/Master";
import ProductList from "../components/ProductList";
import ProductsSkeleton from "../components/loader/ProductsSkeleton";

const ProductByCategory = () => {
  let { category } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let result = await ProductByCategoryRequest(category);
      setData(result);
    })();
  }, [0]);
  if (data.length === 0) {
    return (
      <Master>
        <ProductsSkeleton />
      </Master>
    );
  } else {
    return (
      <Master>
        <ProductList data={data} />
      </Master>
    );
  }
  return <div></div>;
};

export default ProductByCategory;
