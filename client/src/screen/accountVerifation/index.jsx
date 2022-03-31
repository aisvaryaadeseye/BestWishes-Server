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
// import Lottie from 'react-lottie';
import Lottie from "lottie-react";
import doneIcon from "../../assets/images/doneIcon.json";

const AccountVerifcationScreen = () => {
  let navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [otp, setOtp] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = localStorage.getItem("userId");
      const res = await axios.post(`/api/auth/verify?userId=${userId}`, {
        otp,
      });

      setSuccess("Account Successfully verified");
      localStorage.removeItem("userId");
      setTimeout(() => {
        setSuccess("");
        navigate("/loginScreen");
      }, 1500);
    } catch (error) {
      setError(error.response.data.error);
      setOtp("");

      setTimeout(() => {
        setError("");
      }, 5000);
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
          <div className="accountVerifyBtnContainer">
            <button> Verify Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountVerifcationScreen;
