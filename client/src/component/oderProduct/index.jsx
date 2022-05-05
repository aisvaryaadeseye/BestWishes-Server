import React from "react";
import "./style.css";
import orderProductImg from "../../assets/images/orderProductImg.jpg";

const OrderProduct = ({ status, order }) => {
  return (
    <div className="orderProduct">
      <div className="orderProductLeft">
        <img src={order?.proFrontIMAGE} alt="" className="orderProductIMG" />
      </div>
      <div className="orderProductRight">
        <h1>{order?.productName}</h1>
        <h2>#{order?.orderNum}</h2>
        <h3>{order?.dateCreated}</h3>
        <div className="orderstatusContainer">
          <div
            className="orderstatusLeft"
            style={{
              backgroundColor:
                status == "Completed"
                  ? "green"
                  : status == "Pending"
                  ? "yellow"
                  : "red",
            }}
          >
            <span>{status}</span>
          </div>
          <div className="orderstatusRight">
            <span>See details</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
