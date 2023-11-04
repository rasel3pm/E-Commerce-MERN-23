import React from 'react';
import Master from "../components/Master.jsx";
import BG from "../assets/images/profileBG.png"
import Profile from "../components/Profile.jsx";

const UserProfilePage = () => {
    return (
        <Master>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="true">Profile</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="order-tab" data-bs-toggle="tab" data-bs-target="#order-tab-pane" type="button" role="tab" aria-controls="order-tab-pane" aria-selected="false">Order</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                                <Profile/>
                            </div>
                            <div className="tab-pane fade" id="order-tab-pane" role="tabpanel" aria-labelledby="order-tab" tabIndex="0">
                                oderlist
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Master>
    );
};

export default UserProfilePage;