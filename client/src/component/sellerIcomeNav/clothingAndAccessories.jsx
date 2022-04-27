import React from "react";
import SellerIncomeProductDetail from "../sellerIncomeProduct";
import "./style.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import SellerIncomeMobile from "./sellerIncomeMobile";
import { slideResponsive } from "../../component/data/slideResponsive";

const items = [
  <SellerIncomeMobile categories="Clothing & Accessories" />,
  <SellerIncomeMobile categories="Clothing & Accessories" />,
  <SellerIncomeMobile categories="Clothing & Accessories" />,
];
const SellerClothingAndAccessories = () => {
  return (
    <>
      <div className="seller-all-income">
        <div className="seller-all-income-top">
          <span>Product</span>
          <span>Amount</span>
          <span>Duration</span>
          <span>Category</span>
        </div>
        <div className="seller-all-income-bottom">
          <SellerIncomeProductDetail categories="Clothing & Accessories" />
          <SellerIncomeProductDetail categories="Clothing & Accessories" />
          <SellerIncomeProductDetail categories="Clothing & Accessories" />
          <SellerIncomeProductDetail categories="Clothing & Accessories" />
          <SellerIncomeProductDetail categories="Clothing & Accessories" />
          <SellerIncomeProductDetail categories="Clothing & Accessories" />
        </div>
      </div>
      <div className="seller-income-slider">
        <hr />
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={slideResponsive}
          controlsStrategy="alternate"
        />
      </div>
    </>
  );
};

export default SellerClothingAndAccessories;
