import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import StockReportMobile from "../stockReportMobile";
import { slideResponsive } from "../../component/data/slideResponsive";

const items = [
  <StockReportMobile stockStatus="In Stock" />,
  <StockReportMobile stockStatus="Low Stock" />,
  <StockReportMobile stockStatus="Out Stock" />,
];
const StockReportSlide = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={slideResponsive}
      controlsStrategy="alternate"
    />
  );
};

export default StockReportSlide;
