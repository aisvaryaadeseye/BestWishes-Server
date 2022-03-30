import React from "react";
import "./style.css";
import imaG from "../../assets/images/homeBg1.jpg";
import imaG1 from "../../assets/images/homeBg1.jpg";
import imaG2 from "../../assets/images/homeBg3.jpg";

import ProductDetail from "../productDetail";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  300: { items: 1 },
  400: { items: 1 },
  500: { items: 2 },
  600: { items: 2 },
  700: { items: 3 },
  800: { items: 3 },
  900: { items: 3 },
  1100: { items: 4 },
  1224: { items: 5 },
  1324: { items: 5 },
  1424: { items: 6 },
  1524: { items: 6 },
  1624: { items: 7 },
  1924: { items: 8 },
};

const items = [
  <ProductDetail  showDiscount={true}/>,
  <ProductDetail  showDiscount={true}/>,
  <ProductDetail  showDiscount={true}/>,
  <ProductDetail  showDiscount={true}/>,
  <ProductDetail  showDiscount={true}/>,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
];
const ProductSlider = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  );
};

export default ProductSlider;
