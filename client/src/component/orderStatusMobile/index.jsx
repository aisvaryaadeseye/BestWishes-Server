import React from "react";
import "./style.css";

const OrderStatusMobile = ({ orderStatus }) => {
  return (
    <div className="listOfOrderBody">
      <div className="listOfOrdersMobileTop">
        <span>Order Status</span>
        <div
          className="orderMobileText"
          style={{
            backgroundColor:
              orderStatus === "Preparing"
                ? "#f69014"
                : orderStatus === "Completed"
                ? "green"
                : orderStatus === "Delivering"
                ? "blue"
                : "red",
          }}
        >
          <span>{orderStatus}</span>
        </div>
      </div>

      <div className="listOfOrdersMobileMiddle">
        <div className="listOfOrdersMobileMiddleA">
          <span>Order number: </span>
          <span>#0125678999 </span>
        </div>
        <div className="listOfOrdersMobileMiddleA">
          <span>Name: </span>
          <span>Rayna Torff </span>
        </div>
        <div className="listOfOrdersMobileMiddleA">
          <span>Name: </span>
          <span>Tye & dye Shirt</span>
        </div>
        <div className="listOfOrdersMobileMiddleA">
          <span>Quantity: </span>
          <span>5pcs</span>
        </div>
        <div className="listOfOrdersMobileMiddleA">
          <span>Delivery location: </span>
          <span>16b, gilmore drive helsik, finland </span>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusMobile;
