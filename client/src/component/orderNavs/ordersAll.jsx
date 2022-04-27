import React from "react";
import CardPayment from "../cardPayment";
import OrderProduct from "../oderProduct";
import "./style.css";

const OrdersAll = () => {
  return (
    <div className="orderAll">
      <OrderProduct status="Completed" />
      <OrderProduct status="Pending" />
      <OrderProduct status="Cancelled" />
      <OrderProduct status="Pending" />
      <OrderProduct status="Cancelled" />
      <OrderProduct status="Completed" />
      <OrderProduct status="Pending" />
      <OrderProduct status="Cancelled" />
      <OrderProduct status="Completed" />
      {/* <CardPayment /> */}
    </div>
  );
};

export default OrdersAll;
