import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import UserContext from "../../provider/userProvider";

const LoginScreen = () => {
  const { USER, state } = useContext(UserContext);

  const [showCustomer, setShowCustomer] = useState(true);
  const [showSeller, setShowSeller] = useState(false);
  let navigate = useNavigate();

  const handleShowCustomer = () => {
    setShowSeller(true);
    setShowCustomer(false);
  };
  const handleShowSller = () => {
    setShowCustomer(true);
    setShowSeller(false);
  };

  // useEffect(() => {
  //     if (state.token) {
  //       navigate("/");
  //     }
  //   }, [state]);

  return (
    <div className="loginScreen">
      <div className="loginScreenLeft">
        <div className="loginScreenLeftTextContainer">
          <h1>Welcome Back</h1>
          <p>Login to continue experiencing the</p>
          <p>best of hand-made produce</p>
        </div>
      </div>
      <div className="loginScreenRight">
        <div className="loginScreenRightFormContainer">
          <h1>Login in to your account</h1>
          <div className="loginScreenRole">
            <nav className="regNavbar">
              <div className="customerNav" onClick={handleShowSller}>
                <Link to="customerLoginAccount" className="customerNav">
                  Customer Account
                </Link>
                <div
                  className="customerNavUnderline"
                  style={{ display: showCustomer ? "flex" : "none" }}
                ></div>
              </div>
              &nbsp; &nbsp;
              <div className="sellerNav" onClick={handleShowCustomer}>
                <Link to="sellerLoginAccount" className="sellerNav">
                  Seller Account
                </Link>
                <div
                  className="sellerNavUnderline"
                  style={{ display: showSeller ? "flex" : "none" }}
                ></div>
              </div>
            </nav>
            <Outlet />
          </div>
          <div className="dontHaveAccContainer">
            <p>Don't have an account ? </p>

            <a href="/registerScreen/customerRegisterAccount">Sign Up</a>
          </div>
          <div className="termsContainer loginTerms ">
            <p>Terms of use</p>
            <p>Privacy policy</p>
            <p>Help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
