import React from "react";
import ProductDetailCard from "../../component/productDetailCard/productSales";
import totalSales from "../../assets/icons/totalSales.jpg";

import "./style.css";
import ProductSales from "../../component/productDetailCard/productSales";
import ProductIncome from "../../component/productDetailCard/productIncome";

const ProductDetailScreen = () => {
  return (
    <div className="productDetailScreen">
      <div className="productDetailScreenTop">
        <span>
          Product <i className="fa-solid fa-caret-right productFaIcon"></i>{" "}
          Products details
        </span>
      </div>
      <div className="productDetailScreenBottom">
        <div className="productDetailBottomA">
          <ProductSales />
          <ProductIncome />
          <ProductIncome />
        </div>
        <div className="productDetailBottomB"></div>
        <div className="productDetailBottomC"></div>
        <div className="productDetailBottomD"></div>
        <div className="productDetailBottomE"></div>
        <div className="productDetailBottomF"></div>
      </div>
    </div>
  );
};

export default ProductDetailScreen;
