import React, { useState } from "react";
import "./style.css";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
// import Lottie from 'react-lottie';
import Lottie from "lottie-react";
import doneIcon from "../../assets/images/doneIcon.json";

const ResetPasswordScreen = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="resetPassword">
      <div className="resetPasswordFormContainer">
        <h1>Reset your password</h1>
        <p>Create a new password </p>
        <div className="resetPasswordInputContainer passForm">
          <span className="userEmail">New Password</span>
          <div className="passwordContainer">
            <input type="password" className="passwordInput" />
            <i className="fa fa-eye" aria-hidden="true"></i>
          </div>
          <div className="resetPasswordBtnContainer" onClick={handleClickOpen}>
            <button> Set Password</button>
          </div>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Password Reset Completed</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Lottie animationData={doneIcon} />; Your password has been
                changed.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={handleClose} color="primary">
           Close
          </Button> */}
              <Button onClick={handleClose} color="primary" autoFocus>
                <a href="/loginScreen/customerLoginAccount">Login</a>
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordScreen;
