import React, { useState } from "react";
import "./style.css";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import spinnerLoading from "../../assets/icons/spinnerLoading.gif";

const AccountVerifcationScreen = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const [otp, setOtp] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userId = localStorage.getItem("userId");
      const res = await axios.post(`/api/auth/verify?userId=${userId}`, {
        otp,
      });

      setSuccess("Account Successfully verified");
      localStorage.removeItem("userId");
      setIsLoading(false);
      setTimeout(() => {
        setSuccess("");
        navigate("/loginScreen");
      }, 1500);
    } catch (error) {
      setError(error.response.data.error);
      setOtp("");
      setIsLoading(false);

      setTimeout(() => {
        setError("");
      }, 5000);
      setIsLoading(false);
    }
  };
  return (
    <div className="accountVerify">
      <div className="accountVerifyFormContainer">
        {error && (
          <div className="regErrorContainer">
            <span style={{ color: "#f69014" }}> {error}</span>
          </div>
        )}
        {success && (
          <div className="regSuccessContainer">
            <span style={{ color: "#00b533" }}> {success}</span>
          </div>
        )}
        <h1>Account Verification</h1>
        <p>We just sent a verification code to your email </p>
        <p>Enter the Code in the field bellow. </p>
        <form
          className="accountVerifyInputContainer passForm"
          onSubmit={handleSubmit}
        >
          <div className="passwordContainer">
            <input
              type="password"
              name="otp"
              value={otp}
              required
              onChange={(e) => setOtp(e.target.value)}
              className="passwordInput"
            />
          </div>
          <button className="accountVerifyBtnContainer">
            {isLoading ? (
              <img src={spinnerLoading} alt="" className="sign-up-spinner" />
            ) : (
              <span>Verify Account</span>
            )}{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountVerifcationScreen;
