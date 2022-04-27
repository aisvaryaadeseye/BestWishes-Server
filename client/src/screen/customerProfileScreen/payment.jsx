import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const CustomerPayment = () => {
  const [showCard, setShowCard] = useState(true);
  const [showPayPal, setShowPayPal] = useState(false);

  const handleshowCard = () => {
    setShowCard(true);
    setShowPayPal(false);
  };
  const handleshowPayPal = () => {
    setShowCard(false);
    setShowPayPal(true);
  };

  return (
    <div className="customerPayment">
      <div className="customerPaymentTop">
        <h1>Payment</h1>
        <p>Check the status of your order here</p>
        <nav className="orderNavbarContainer">
          <div className="orderNav" onClick={handleshowCard}>
            <Link to="payWithCard" className="customerNav">
              {"  "}Card{" "}
            </Link>
            <div
              className="orderNavUnderline"
              style={{ display: showCard ? "flex" : "none" }}
            ></div>
          </div>
          <div className="orderNav" onClick={handleshowPayPal}>
            <Link to="payWithPayPal" className="customerNav">
              Paypal
            </Link>
            <div
              className="orderNavUnderline"
              style={{ display: showPayPal ? "flex" : "none" }}
            ></div>
          </div>
        </nav>
      </div>
      <div className="customerPaymentBottom">
        <Outlet />
      </div>
    </div>
  );
};

export default CustomerPayment;
