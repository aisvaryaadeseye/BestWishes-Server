import React from "react";
import OrderProduct from "../oderProduct";


const OrdersCancelled = () => {
  return <div className="orderCancelled">
          <OrderProduct status="Cancelled" />
          <OrderProduct status="Cancelled" />
          <OrderProduct status="Cancelled" />
          <OrderProduct status="Cancelled" />
          <OrderProduct status="Cancelled" />
          <OrderProduct status="Cancelled" />
          <OrderProduct status="Cancelled" />

  </div>;
};

export default OrdersCancelled;
