import React from "react";
import "./style.css";

const OrderStatusMobile = ({ orderStatus, order }) => {
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
          <span>#{order?.orderNum}</span>
        </div>
        <div className="listOfOrdersMobileMiddleA">
          <span>Customer: </span>
          <span>{order?.customerName}</span>
        </div>
        <div className="listOfOrdersMobileMiddleA">
          <span>Product: </span>
          <span>{order?.productName}</span>
        </div>
        <div className="listOfOrdersMobileMiddleA">
          <span>Quantity: </span>
          <span>{order?.qty}pcs</span>
        </div>
        <div className="listOfOrdersMobileMiddleA">
          <span>Delivery location: </span>
          <span>
            {order?.customerAddress + ", "}
            {order?.customerState + ","}
            {" " + order?.customerCountry}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusMobile;
