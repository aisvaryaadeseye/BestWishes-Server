import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import RecentSalesMobile from "../recentSalesMobile";
import { slideResponsive } from "../../component/data/slideResponsive";

const items = [
  <RecentSalesMobile />,
  <RecentSalesMobile />,
  <RecentSalesMobile />,
  <RecentSalesMobile />,
  <RecentSalesMobile />,
];
const RecentSalesMobileSlider = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={slideResponsive}
      controlsStrategy="alternate"
    />
  );
};

export default RecentSalesMobileSlider;
