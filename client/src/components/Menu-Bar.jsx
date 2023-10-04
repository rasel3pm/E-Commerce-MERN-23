import React from 'react';
import logo from "../assets/images/plainb-logo.svg"
const MenuBar = () => {
    return (
        <>
            <nav className="navbar shadow-sm sticky-top bg-white navbar-expand-lg navbar-light py-3">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img className="img-fluid" src={logo} alt="" width="96px"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav06"
                            aria-controls="nav06" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="nav06">
                        <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">
                            <li className="nav-item me-4"><a className="nav-link" href="#">About</a></li>
                            <li className="nav-item me-4"><a className="nav-link" href="#">Company</a></li>
                            <li className="nav-item me-4"><a className="nav-link" href="#">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Testimonials</a></li>
                        </ul>
                    </div>
                    <div className=" d-lg-flex" action="">
                        <div className="input-group">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-dark" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: 24, height: 24 }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                            </button>
                        </div>
                        <button type="button" className="btn ms-3 btn-outline-success position-relative">
                            <i className="bi bi-bag"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">02</span>
                        </button>
                        <button type="button" className="btn ms-3 btn-dark d-flex">
                            <i className="bi bi-heart"></i>
                        </button>
                        <button type="button" className="btn ms-3 btn-success d-flex">
                            <i className="bi mx-1 bi-person"></i> Account
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default MenuBar;