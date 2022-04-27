import React from "react";
import "./style.css";

const StockReportMobile = ({ stockStatus }) => {
  return (
    <div className="stock-reportBody">
      <div className="stock-reportsMobileTop">
        <span>Product Status</span>
        <div
          className="orderMobileText"
          style={{
            backgroundColor:
              stockStatus === "In Stock"
                ? "green"
                : stockStatus === "Low Stock"
                ? "#f69014"
                : "red",
          }}
        >
          <span>{stockStatus}</span>
        </div>
      </div>

      <div className="stock-reportsMobileMiddle">
        <div className="stock-reportsMobileMiddleA">
          <span>Category: </span>
          <span>Clothing & Accessories</span>
        </div>
        <div className="stock-reportsMobileMiddleA">
          <span>Product: </span>
          <span>Tye & dye hand made shirt</span>
        </div>
        <div className="stock-reportsMobileMiddleA">
          <span>Name: </span>
          <span>Tye & dye Shirt</span>
        </div>
        <div className="stock-reportsMobileMiddleA">
          <span>Price: </span>
          <span>€49.99</span>
        </div>
        <div className="stock-reportsMobileMiddleA">
          <span>Quatity: </span>
          <span>500pcs</span>
        </div>
      </div>
    </div>
  );
};

export default StockReportMobile;
