import React from "react";
import "./style.css";
import visaCardIcon from "../../assets/icons/visaCardIcon.svg";

const CardPayment = ({ showCheck, checkBg }) => {
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
      {showCheck ? (
        <div className="cardPaymentRightCheck">
          <div
            className="card-check-box-container"
            style={{ backgroundColor: checkBg ? "#f69014 " : "white" }}
          ></div>
        </div>
      ) : (
        <div className="cardPaymentRight">
          <span>
            {" "}
            <i className="fa fa-trash cardFaTrash" aria-hidden="true"></i>Remove
          </span>
        </div>
      )}
    </div>
  );
};

export default CardPayment;
