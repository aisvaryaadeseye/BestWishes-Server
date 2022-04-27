import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartScreenItem from "../../component/cartScreenItem";
import "./style.css";

const CartScreen = () => {
  const [iscart, setIsCart] = useState(false);
  return (
    <div className="cart-screen">
      <div className="cart-screen-on">
        <div className="cart-screen-left">
          <CartScreenItem />
          <CartScreenItem />
        </div>
        <div className="cart-screen-right">
          <div className="cart-screen-summary">
            <h5>Cart Summary</h5>
            <hr />
            <div className="cart-screen-summary-text">
              <span>Items total (2)</span>
              <span>€49.99</span>
            </div>
            <hr />
            <div className="cart-screen-summary-text">
              <span>Shipping fee</span>
              <span>€4.99</span>
            </div>
            <hr />
            <div className="cart-screen-summary-total">
              <span>Subtotal</span>
              <span>€4.99</span>
            </div>
            <hr />
            <Link to="/cart-buyer-address" className="cart-screen-summary-btn">
              <span>Proceed to check-out</span>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="cart-screen-off">
        <h1>Your cart is empty</h1>
        <span>
          Browser our platform to start enjoying the best of handmade product
        </span>
        <Link to="/product-screen-clothing">
          <button className="cart-btn">Start shopping now</button>
        </Link>
      </div> */}
    </div>
  );
};

export default CartScreen;
