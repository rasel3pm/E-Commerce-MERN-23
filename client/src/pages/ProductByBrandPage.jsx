import React, { useEffect, useState } from "react";
import Master from "../components/Master";
import { useParams } from "react-router-dom";
import { ProductByBrandRequest } from "../apiRequest/apiRequest";
import ProductsSkeleton from "../components/loader/ProductsSkeleton";
import ProductList from "../components/ProductList";

const ProductByBrand = () => {
  let { brand } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await ProductByBrandRequest(brand);
      setData(result);
    })();
  }, [0]);

  if (data.length === 0) {
    return (
      <Master>
        <ProductsSkeleton />;
      </Master>
    );
  } else {
    return (
      <Master>
        <ProductList data={data} />
      </Master>
    );
  }
};

export default ProductByBrand;
