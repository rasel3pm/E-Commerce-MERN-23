import React, { useEffect, useState } from 'react';
import { SliderListRequest } from '../apiRequest/apiRequest.js';

const Slider = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            let result = await SliderListRequest();
            setData(result);
        })();
    }, []);

    return (
        <div id="carouselExampleDark" className="carousel hero-bg carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {data.length > 0 ? (
                    data.map((item, i) => (
                        <button
                            key={i}
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={i}
                            className={i === 0 ? 'active' : ''}
                            aria-label={`Slide ${i + 1}`}
                        ></button>
                    ))
                ) : (
                    <span className="text-center">No Data Found</span>
                )}
            </div>
            <div className="carousel-inner py-5">
                {data.length > 0 ? (
                    data.map((item, i) => (
                        <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`} data-bs-interval="10000">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                        <h1 className="headline-1">{item['title']}</h1>
                                        <p>{item['short_des']}</p>
                                        <button className="btn text-white btn-success px-5">Buy Now</button>
                                    </div>
                                    <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                        <img src={item['img']} className="w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : null}
            </div>

            <button className="carousel-control-prev btn rounded-5" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next btn" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Slider;
