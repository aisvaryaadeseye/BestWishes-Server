import React from "react";
import "./style.css";
import topSellingImg from "../../assets/images/topSellingImg.jpg";

const TopSelling = () => {
  return (
    <div className="topSelling-container">
      <div className="topSelling-container-top">
        <img src={topSellingImg} alt="" className="top-selling-img" />
      </div>
      <div className="topSelling-container-bottom">
        <span>Clothing & Accessories</span>
        <span>Sauna bucket</span>
        <h4>€49.99</h4>
      </div>
    </div>
  );
};

export default TopSelling;
