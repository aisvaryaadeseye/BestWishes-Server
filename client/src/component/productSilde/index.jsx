import React from "react";
import "./style.css";
import ProductDetail from "../productDetail";
import { slideResponsive } from "../../component/data/slideResponsive";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { productData } from "../../component/data/productData";

const items = [];
const ProductSlider = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={productData.map((product) => {
        return (
          <ProductDetail key={product.id} product={product} sellerTag={true} />
        );
      })}
      responsive={slideResponsive}
      controlsStrategy="alternate"
    />
  );
};

export default ProductSlider;
