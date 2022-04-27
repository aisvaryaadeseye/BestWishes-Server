import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import RecentSalesMobile from "../recentSalesMobile";
import { slideResponsive } from "../../component/data/slideResponsive";
import ReviewsMobile from "../reviewMobile";

const items = [
  <ReviewsMobile />,
  <ReviewsMobile />,
  <ReviewsMobile />,
  <ReviewsMobile />,
  <ReviewsMobile />,
];
const ReviewMobileSlide = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={slideResponsive}
      controlsStrategy="alternate"
    />
  );
};

export default ReviewMobileSlide;
