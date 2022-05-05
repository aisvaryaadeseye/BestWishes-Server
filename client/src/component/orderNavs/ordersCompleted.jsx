import React from "react";
import OrderProduct from "../oderProduct";

const OrdersCompleted = ({ getCustomerOrder }) => {
  return (
    <div className="orderCompleted">
      {getCustomerOrder &&
        getCustomerOrder.map((order) => {
          return <OrderProduct order={order} status="Completed" />;
        })}
    </div>
  );
};

export default OrdersCompleted;
