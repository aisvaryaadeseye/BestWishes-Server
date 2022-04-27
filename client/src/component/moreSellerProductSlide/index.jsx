import React from "react";
import "./style.css";
import { slideResponsive } from "../../component/data/slideResponsive";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { productData } from "../../component/data/productData";
import MoreSellerProduct from "../moreSellerProduct";

const items = [];
const MoreSellerProductSlide = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={productData.map((product) => {
        return (
          <MoreSellerProduct
            key={product.id}
            product={product}
            sellerTag={true}
          />
        );
      })}
      responsive={slideResponsive}
      controlsStrategy="alternate"
    />
  );
};

export default MoreSellerProductSlide;
