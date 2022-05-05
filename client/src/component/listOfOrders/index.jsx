import React, { useState } from "react";
import "./style.css";
import orderProductImg from "../../assets/images/orderProductImg.jpg";
import { generateRan } from "../data/genRandonNum";

const ListOfOrders = ({ orderType, showProductImg, order }) => {
  return (
    <div className="listOfOrders">
      <span>#{order?.orderNum}</span>

      <div className="orderTextContainer">
        {/* <div className="orderImgContainer">
          <img src={order?.proFrontIMAGE} alt="" className="orderImg" />
        </div> */}
        <span>{order?.customerName}</span>
      </div>

      <div className="orderTextContainer">
        {showProductImg && (
          <div className="orderImgContainer">
            <img src={order?.proFrontIMAGE} alt="" className="orderImage " />
          </div>
        )}
        <span>{order?.productName}</span>
      </div>

      <span>{order?.qty}</span>
      <span>
        {order?.customerAddress}
        <br />
        {order?.customerState + ","}
        {" " + order?.customerCountry}
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
