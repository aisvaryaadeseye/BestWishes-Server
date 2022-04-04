import React from "react";
import CardPayment from "../cardPayment";
import "./style.css";

const PayWithCard = () => {
  return (
    <div className="payWithCard">
      <div className="payWithCardLeft">
        <CardPayment />
        <CardPayment />
        <CardPayment />
      </div>
      <div className="payWithCardRight">
        <span>
          <i className="fa fa-plus" aria-hidden="true"></i> Add new card
        </span>
      </div>
    </div>
  );
};

export default PayWithCard;
