import React from "react";
import "./style.css";
import "react-dropdown/style.css";
import totalProducts from "../../assets/icons/totalProducts.jpg";

const TotalProductsCard = () => {
  return (
    <div className="totalProductsCard">
      <div className="totalProductsCardTop">
        <h1>Total Products</h1>
      </div>
      <div className="totalProductsCardMiddle">
        <h1>57, 020</h1>
        <img src={totalProducts} alt="" className="cardImg" />
      </div>
    </div>
  );
};

export default TotalProductsCard;
