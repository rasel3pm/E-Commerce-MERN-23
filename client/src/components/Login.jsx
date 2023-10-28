import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UserLoginRequest } from "../apiRequest/apiRequest.js";
import { useNavigate } from "react-router-dom";
import Log from "../assets/images/plainb-logo.svg";
const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const emailLogin = async (e) => {
    e.preventDefault();
    if (email.length === 0) {
      toast.error("Email required");
    } else {
      let res = await UserLoginRequest(email);
      if (res["status"] === "success") {
        toast.success(res["message"]);
        navigate("/verify/" + email);
      } else {
        toast.error(res["message"]);
      }
    }
  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 py-md-2">
          <div className="card border p-3 mt-5">
            <div className="text-center">
              <img src={Log} width={120} />
            </div>
            <div className="card-body">
              <form>
                <label className="form-label my-2">Your Email Address</label>
                <input
                  placeholder="Exp : jhon@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                />
                <button
                  onClick={emailLogin}
                  className="btn my-3 btn-success w-100"
                >
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster position={"bottom-center"} />
    </div>
  );
};

export default Login;
