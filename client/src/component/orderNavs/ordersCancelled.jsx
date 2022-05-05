import React from "react";
import OrderProduct from "../oderProduct";

const OrdersCancelled = ({ getCustomerOrder }) => {
  return (
    <div className="orderCancelled">
      {getCustomerOrder &&
        getCustomerOrder.map((order) => {
          return <OrderProduct order={order} status="Cancelled" />;
        })}
    </div>
  );
};

export default OrdersCancelled;
