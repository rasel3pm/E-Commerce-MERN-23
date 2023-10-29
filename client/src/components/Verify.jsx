import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UserVerifyRequest } from "../apiRequest/apiRequest.js";
import { useParams } from "react-router-dom";
import SubmitButton from "./SubmitButton.jsx";
const Verify = () => {
  const [code, setCode] = useState("");
  const [BtnLoader, SetBtnLoader] = useState(false);
  let { email } = useParams();
  const verifyCode = async (e) => {
    e.preventDefault();
    if (code.length === 0) {
      toast.error("Verify code is required");
    } else {
      SetBtnLoader(true);
      let res = await UserVerifyRequest(email, code);
      SetBtnLoader(false);
      if (res["status"] === "success") {
        toast.success("success");
        window.location.href = sessionStorage.getItem("lastLocation");
      } else {
        toast.error(res["message"]);
      }
    }
  };
  return (
    <div className="container section">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <div className="card bg-light">
            <div className="card-body">
              <form>
                <label className="form-label my-2">
                  Your Verification Code
                </label>
                <input
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
                {/* <button onClick={verifyCode} className="btn my-3 btn-success w-100">Verify</button> */}
                <SubmitButton
                  text="Verify"
                  submit={BtnLoader}
                  onClick={verifyCode}
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

export default Verify;
