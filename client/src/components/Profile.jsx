import React from 'react';

const Profile = () => {
    return (
        <div>
            <div className="row py-3">
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="Full Name"/>
                </div>
                <div className="col-md-6 pt-3">
                    <input type="text" disabled={true} className="form-control" value={"Email"}/>
                </div>
                <div className="col-md-6 pt-3">
                    <input type="text" className="form-control" placeholder="Phone"/>
                </div>
                <div className="col-md-12 pt-3">

                </div>
                <div className="col-md-6 pt-3">
                    <input type="text" className="form-control" placeholder="State"/>
                </div>
                <div className="col-md-6 pt-3">
                    <input type="text" className="form-control" placeholder="City"/>
                </div>
                <div className="col-md-12 pt-3">
                    <input type="text" className="form-control" placeholder="Address"/>
                </div>
                <div className="col-md-6 pt-3">
                    <button className="btn btn-success">Update info</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;