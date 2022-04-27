import React from "react";
import "./style.css";
import orderProductImg from "../../assets/images/orderProductImg.jpg";

const SellerIncomeProductDetail = ({categories}) => {
  return (
    <div className="sellerIncomeProductDetail">
      <div className="seller-img-product-container">
        <img src={orderProductImg} alt="" className="seller-img-product" />
        <span>A tincidunt egestas magna tellus</span>
      </div>
      <span>€49.99</span>
      <div>
        <select name="" id="" className="graphSelect">
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="WeekYearlyly">Yearly</option>
        </select>
      </div>
      <h5>{categories}</h5>
    </div>
  );
};

export default SellerIncomeProductDetail;
