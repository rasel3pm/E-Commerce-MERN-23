import React from 'react';
import {Container} from "react-bootstrap";
import Logo from "../../assets/images/not-Found.gif"
import "../notFound/notFound.css"
const NotFound = () => {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-md-6 text-center pt-5">
                        <h1 className="text-style fw-bold">404</h1>
                        <h3 className="text-style">Opps! Page Not Found</h3>
                    </div>
                    <div className="col-md-6">
                        <img src={Logo} alt="not found"/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;