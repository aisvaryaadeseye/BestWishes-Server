import React from "react";
import "./style.css";

const ReviewsMobile = () => {
  return (
    <div className="reviewsMobileDiv">
      <div className="reviewsMobileMiddleA">
        <span>Product: </span>
        <span>A tincidunt egestas magna tellus</span>
      </div>
      <div className="reviewsMobileMiddleA">
        <span>Customer: </span>
        <span>Rayna Torff </span>
      </div>
      <div className="reviewsMobileMiddleA">
        <span>Ratings: </span>
        <div>
          <span className="customer-review-srar">&#9733;</span>
          <span className="customer-review-srar">&#9733;</span>
          <span className="customer-review-srar">&#9733;</span>
          <span className="customer-review-srar">&#9733;</span>
          <span className="customer-review-srar">&#9733;</span>
        </div>
      </div>
      <div className="reviewsMobileMiddleA">
        <span>Review: </span>
        <span>Lorem ipsum dolor sit, amet consectetur</span>
      </div>
    
    </div>
  );
};

export default ReviewsMobile;
