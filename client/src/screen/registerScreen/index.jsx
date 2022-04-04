import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css";

const RegisterScreen = () => {
  const [showCustomer, setShowCustomer] = useState(true);
  const [showSeller, setShowSeller] = useState(false);

  const handleShowCustomer = () => {
    setShowSeller(true);
    setShowCustomer(false);
  };
  const handleShowSller = () => {
    setShowCustomer(true);
    setShowSeller(false);
  };

  return (
    <div className="registerScreen">
      <div className="registerScreenLeft">
        <div className="registerScreenLeftTextContainer">
          <h3>Do you love Craft ?</h3>
          <h3>Do you want to sell your Product globally ?</h3>
          <h3>Do you love Craft ?</h3>
          <h4>You are at the right place</h4>
          <div className="regTextDivider"></div>
          <h1>Welcome to Best wishes</h1>
          <h2>Our Core values</h2>
          <div className="registerTextContainer">
            <h1>
              {" "}
              <i className="fa fa-circle " aria-hidden="true"></i>Authenticity
            </h1>
            <p>All our products are 100% raw materials no</p>
            <p>added components</p>
          </div>

          <div className="registerTextContainer">
            <h1>
              {" "}
              <i className="fa fa-circle " aria-hidden="true"></i>Supporting
              small business
            </h1>
            <p>Best wishes priority is to give Artisan</p>
            <p>their due royalty and also make sure</p>
            <p>our customers get the value of thier</p>
            <p>purchase</p>
          </div>
          <div className="registerTextContainer">
            <h1>
              {" "}
              <i className="fa fa-circle " aria-hidden="true"></i>Eco friendly
            </h1>
            <p>Our priority is to give Artisan their due</p>
            <p>royalty and also make sure our</p>
            <p>customers get the value of thier</p>
            <p>purchase</p>
          </div>
        </div>
      </div>
      <div className="registerScreenRight">
        <div className="registerScreenRightFormContainer">
          <h1>Create an account</h1>
          {/* <nav className="regNavbar">
            <div className="customerNav" onClick={handleShowSller}>
              <Link to="customerRegisterAccount" className="customerNav">
                Customer Account
              </Link>
              <div
                className="customerNavUnderline"
                style={{ display: showCustomer ? "flex" : "none" }}
              ></div>
            </div>
            &nbsp; &nbsp;
            <div className="sellerNav" onClick={handleShowCustomer}>
              <Link to="sellerRegisterAccount" className="sellerNav">
                Seller Account
              </Link>
              <div
                className="sellerNavUnderline"
                style={{ display: showSeller ? "flex" : "none" }}
              ></div>
            </div>
          </nav> */}

          <Outlet />
          <div className="registerRole"></div>

          {/* =================== */}
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
