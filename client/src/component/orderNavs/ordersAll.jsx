import React from "react";
import CardPayment from "../cardPayment";
import OrderProduct from "../oderProduct";
import "./style.css";

const OrdersAll = ({ getCustomerOrder }) => {
  return (
    <div className="orderAll">
      {getCustomerOrder &&
        getCustomerOrder.map((order) => {
          return (
            <OrderProduct status="Pending" key={order._id} order={order} />
          );
        })}
    </div>
  );
};

export default OrdersAll;
