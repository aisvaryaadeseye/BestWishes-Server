import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartScreenItem from "../../component/cartScreenItem";
import "./style.css";
import CartContext from "../../provider/cartProvider";

const CartScreen = () => {
  const [qty, setQty] = useState(0);
  const [iscart, setIsCart] = useState(false);
  const { cartState, CART } = useContext(CartContext);

  const itemsPrice = cartState.cart.reduce(
    (a, c) => a + c.productPrice * c.qty,
    0
  );
  const totalPrice = itemsPrice;

  let showCartItem =
    cartState.cart &&
    cartState.cart.map((item, i) => {
      return <CartScreenItem item={item} key={i} />;
    });

  return (
    <div className="cart-screen">
      <div className="cart-screen-on">
        <div className="cart-screen-left">
          {showCartItem}
          {/* <CartScreenItem />
          <CartScreenItem /> */}
        </div>
        <div className="cart-screen-right">
          <div className="cart-screen-summary">
            <h5>Cart Summary</h5>
            <hr />
            <div className="cart-screen-summary-text">
              <span>Items total ({cartState.cart.length})</span>
              <span>€{totalPrice}</span>
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
