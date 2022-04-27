import React from "react";
import "./style.css";
import customerImg from "../../assets/images/customerImg.jpg";

const RecentSales = () => {
  return (
    <div className="recent-sales">
      <span>A tincidunt egestas magna tellus </span>
      <div className="recent-sales-img-container">
        <img src={customerImg} alt="" className="recent-sales-img" />
        <span>Riyaka Torf</span>
      </div>
      <span>Finland/helsinki </span>
      <span>5pcs</span>
      <span>22/10/2022 </span>
    </div>
  );
};

export default RecentSales;
