import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UserVerifyRequest } from "../apiRequest/apiRequest.js";
import { useParams } from "react-router-dom";
import SubmitButton from "./SubmitButton.jsx";
import OtpInput from "react-otp-input";
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
  const renderInput = (inputProps, i) => (
    <input
      {...inputProps}
      key={i}
      className="form-control"
      style={{
        width: "3rem",
        height: "3rem",
        margin: "0 0.5rem",
        textAlign: "center",
        fontSize: "30px",
      }}
    />
  );
  console.log(code);
  return (
    <div className="container section">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card shadow border p-5">
            <div className="card-body">
              <form>
                <label className="form-label my-2">Verification Code</label>
                <OtpInput
                  numInputs={6}
                  isInputNum={true}
                  separator={<span>-</span>}
                  value={code}
                  onChange={setCode}
                  inputStyle="inputStyle"
                  containerStyle="containerStyle"
                  inputClassName="inputClassName"
                  shouldAutoFocus
                  isInputSecure
                  hasErrored
                  errorStyle="errorStyle"
                  onChange={(otp) => setCode(otp)}
                  renderInput={renderInput}
                />

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
