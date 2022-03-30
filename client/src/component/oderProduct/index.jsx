import React from "react";
import "./style.css";
import orderProductImg from "../../assets/images/orderProductImg.jpg";

const OrderProduct = ({ status }) => {
  return (
    <div className="orderProduct">
      <div className="orderProductLeft">
        <img src={orderProductImg} alt="" className="orderProductIMG" />
      </div>
      <div className="orderProductRight">
        <h1>Tye and dye T-shirt mode</h1>
        <h2>#P0023</h2>
        <h3>22/02/2022</h3>
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
