import React from "react";
import "./style.css";
import orderProductImg from "../../assets/images/orderProductImg.jpg";

const ListOfOrders = ({ orderType, showProductImg }) => {
  return (
    <div className="listOfOrders">
      <span>#00533</span>

      <div className="orderTextContainer">
        <div className="orderImgContainer">
          <img src={orderProductImg} alt="" className="orderImg" />
        </div>
        <span>Rayna Torff</span>
      </div>

      <div className="orderTextContainer">
        {showProductImg && (
          <div className="orderImgContainer">
            <img src={orderProductImg} alt="" className="orderImage " />
          </div>
        )}
        <span>Tye & dye shirt</span>
      </div>

      <span>3</span>
      <span>
        16b, gitmore drive, <br />
        helski, Finland
      </span>
      <div
        className="orderStatusContainer"
        style={{
          backgroundColor:
            orderType == "Preparing"
              ? "#f69014"
              : orderType == "Completed"
              ? "#00b533"
              : orderType == "Delivering"
              ? "#0392e2"
              : "red",
        }}
      >
        <span>{orderType}</span>
      </div>
    </div>
  );
};

export default ListOfOrders;
