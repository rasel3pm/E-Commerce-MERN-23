import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UserLoginRequest } from "../apiRequest/apiRequest.js";
import { useNavigate } from "react-router-dom";
import Log from "../assets/images/plainb-logo.svg";
import SubmitButton from "./SubmitButton.jsx";
const Login = () => {
  const [email, setEmail] = useState("");
  const [BtnLoader, SetBtnLoader] = useState(false);
  const navigate = useNavigate();
  const emailLogin = async (e) => {
    e.preventDefault();
    if (email.length === 0) {
      toast.error("Email required");
    } else {
      SetBtnLoader(true);
      let res = await UserLoginRequest(email);
      SetBtnLoader(false);
      if (res["status"] === "success") {
        toast.success(res["message"]);
        navigate("/verify/" + email);
      } else {
        toast.error(res["message"]);
      }
    }
  };
  return (
    <div className=" ">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          {/* card start  */}
          <div className="card shadow-sm border p-3 mt-5">
            <div className="text-center">
              <img src={Log} width={120} />
            </div>
            <div className=" py-2 md-py-3">
              <h1 className="text-center text-success">Welcome Back !! </h1>
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

                <SubmitButton
                  submit={BtnLoader}
                  text="Next"
                  onClick={emailLogin}
                  className="btn my-3 btn-success w-100"
                />
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
