import React from "react";
import "./style.css";
import visaCardIcon from "../../assets/icons/visaCardIcon.svg";

const CardPayment = () => {
  return (
    <div className="cardPayment">
      <div className="cardPaymentLeft">
        <div className="cardImgCOntainer">
          <img src={visaCardIcon} alt="" className="cardIcon" />
        </div>
      </div>
      <div className="cardPaymenMiddle">
        <h1>John Doe</h1>
        <h2>1234 XXXX XXXX 5478</h2>
        <h3>Visa card</h3>
      </div>
      <div className="cardPaymentRight">
        <span>
          {" "}
          <i className="fa fa-trash cardFaTrash" aria-hidden="true"></i>Remove
        </span>
      </div>
    </div>
  );
};

export default CardPayment;
