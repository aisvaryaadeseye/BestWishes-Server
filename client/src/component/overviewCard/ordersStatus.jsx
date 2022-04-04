import React from "react";
import orderStatusImg from "../../assets/images/orserStatusImg.png";

const ShowOrderStatus = (title, percentage, color) => {
  return (
    <div className="statusDetails">
      <div className="statusBox" style={{ backgroundColor: color }}></div>
      <h3>{title}</h3>
      <h4 style={{ color: color }}>{percentage}%</h4>
    </div>
  );
};

const OrdersStatus = ({ title, percentage, color }) => {
  return (
    <div className="orderStatus">
      <div className="orderStatusTop">
        <h1>Orders Status</h1>
      </div>
      <div className="orderStatusBottom">
        <div className="orderStatusImgContainer">
          <img src={orderStatusImg} alt="" className="orderstatusImg" />
        </div>
        <div className="statusDetailContainer">
          {ShowOrderStatus(
            (title = "Completed"),
            (percentage = "55")
            // (color = "0392e2")
          )}
          {ShowOrderStatus(
            (title = "Delivering"),
            (percentage = "25"),
            (color = "#0392e2")
          )}
          {ShowOrderStatus(
            (title = "Preparing"),
            (percentage = "15"),
            (color = "#f69014")
          )}
          {ShowOrderStatus(
            (title = "Cancel"),
            (percentage = "5"),
            (color = "red")
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersStatus;
