import React from "react";
import "./style.css";
import orderProductImg from "../../assets/images/orderProductImg.jpg";

const OverViewProductStock = ({ stockType, colorType }) => {
  return (
    <div className="overViewProductStock">
      <div className="stockImgContainer">
        <img src={orderProductImg} alt="" className="stockImg" />
      </div>
      <span>Clothing & Accessories</span>
      <span>Tye & dye hand made shirt</span>
      <span>€45.99</span>
      <span>500pc</span>
      <div className="stockContainer">
        <span style={{ color: colorType }}>{stockType}</span>
      </div>
    </div>
  );
};

export default OverViewProductStock;
