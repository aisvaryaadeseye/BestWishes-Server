import React from "react";
import OrderProduct from "../oderProduct";


const OrdersCompleted = () => {
  return <div className="orderCompleted">
          <OrderProduct status="Completed" />
          <OrderProduct status="Completed" />
          <OrderProduct status="Completed" />
          <OrderProduct status="Completed" />
          <OrderProduct status="Completed" />
          <OrderProduct status="Completed" />

  </div>;
};

export default OrdersCompleted;
