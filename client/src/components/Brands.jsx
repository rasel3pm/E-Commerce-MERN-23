import {Link} from "react-router-dom";
import React,{useState,useEffect} from 'react';
import {BrandListRequest} from "../apiRequest/ApiRequest.js";

const Brands = () => {

    const [data,setData]=useState([])

    useEffect(()=>{

        (async () => {
            let result= await BrandListRequest();
            setData(result);
        })()

    },[0])




    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <h1 className="headline-4 text-center my-2 p-0">Top Brands</h1>
                    <span className="bodySmal mb-5 text-center">Explore a World of Choices Across Our Most Popular <br/>Shopping Categories</span>


                    {
                        data.length>0?(
                            data.map((item,i)=>{
                                return(
                                    <div key={i}  className="col-6 col-lg-8r text-center col-md-8r p-2">
                                        <Link to="/" className="card h-100 rounded-3 bg-light">
                                            <div className="card-body">
                                                <img className="w-75" src={item['brandImg']}/>
                                                <p className="bodySmal mt-3">{item['brandName']}</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        ):(<span className="text-center">No Data Found</span>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Brands;