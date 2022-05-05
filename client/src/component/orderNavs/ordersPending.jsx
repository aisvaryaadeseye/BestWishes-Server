import React from "react";
import OrderProduct from "../oderProduct";

const OrdersPending = ({ getCustomerOrder }) => {
  return (
    <div className="orderPending">
      {getCustomerOrder &&
        getCustomerOrder.map((order) => {
          return <OrderProduct order={order} status="Pending" />;
        })}
    </div>
  );
};

export default OrdersPending;
