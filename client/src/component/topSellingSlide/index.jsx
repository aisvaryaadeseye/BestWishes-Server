import React from "react";
// import "./style.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import TopSelling from "../topSelling";

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
  1624: { items: 6 },
  1924: { items: 6 },
};

const items = [
  <TopSelling />,
  <TopSelling />,
  <TopSelling />,
  <TopSelling />,
  <TopSelling />,
  <TopSelling />,
  <TopSelling />,
  <TopSelling />,
  <TopSelling />,
  <TopSelling />,
  <TopSelling />,
  <TopSelling />,
  <TopSelling />,
  <TopSelling />,
  <TopSelling />,
];
const TopSellingSlider = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  );
};

export default TopSellingSlider;
