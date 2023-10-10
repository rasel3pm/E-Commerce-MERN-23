import React from 'react';
const Verify = () => {
    return (
        <div className="container section">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <div className="card bg-light">
                        <div className="card-body">
                            <form>
                                <label className="form-label my-2">Your Verification Code</label>
                                <input  type="text" className="form-control"/>
                                <button className="btn my-3 btn-success w-100">Verify</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Verify;