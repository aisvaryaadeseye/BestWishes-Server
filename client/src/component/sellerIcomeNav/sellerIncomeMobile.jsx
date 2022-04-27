import React from "react";

const SellerIncomeMobile = ({ categories }) => {
  return (
    <div className="seller-all-income-mobile">
      <div className="seller-all-income-mobile-text">
        <span>Product: </span>
        <span>A tincidunt egestas magna tellus</span>
      </div>
      <div className="seller-all-income-mobile-text">
        <span>Amount: </span>
        <span>£49.99</span>
      </div>
      <div className="seller-all-income-mobile-text">
        <span>Duration: </span>
        <select name="" id="" className="graphSelect seller-income-select">
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="WeekYearlyly">Yearly</option>
        </select>
      </div>
      <div className="seller-all-income-mobile-text">
        <span>Categories: </span>
        <span>{categories}</span>
      </div>
    </div>
  );
};

export default SellerIncomeMobile;
