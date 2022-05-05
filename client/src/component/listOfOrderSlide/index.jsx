import React from "react";
import "./style.css";
import { slideResponsive } from "../../component/data/slideResponsive";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import OrderStatusMobile from "../orderStatusMobile";

const items = [
  <OrderStatusMobile orderStatus="Preparing" />,
  <OrderStatusMobile orderStatus="Completed" />,
  <OrderStatusMobile orderStatus="Delivering" />,
  <OrderStatusMobile orderStatus="Preparing" />,
];
const ListOfOrderSlider = ({getOrders}) => {
  return (
    <AliceCarousel
      mouseTracking
      items={getOrders?.map((order) =>{
        return (  <OrderStatusMobile  key={order._id} orderStatus="Preparing" order={order} />)
      })}
      responsive={slideResponsive}
      controlsStrategy="alternate"
    />
  );
};

export default ListOfOrderSlider;
