import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartScreenItem from "../../component/cartScreenItem";
import "./style.css";
import CartContext from "../../provider/cartProvider";

const CartScreen = () => {
  const [qty, setQty] = useState(0);
  const [iscart, setIsCart] = useState(false);
  const { cartState, CART } = useContext(CartContext);
  const navigate = useNavigate();
  let shippingFee = cartState.cart.length === 0 ? 0 : 4;

  let itemsPrice = cartState?.cart?.reduce(
    (a, c) => a + c.productPrice * c.qty,
    0
  );
  let totalPrice = itemsPrice + shippingFee;

  let showCartItem =
    cartState?.cart &&
    cartState?.cart.map((item, i) => {
      return <CartScreenItem item={item} key={i} />;
    });

  function handleCheckOut() {
    // CART.saveTotalPrice(totalPrice)
    if (cartState?.cart.length > 0) {
      CART.saveSubTotal(totalPrice.toFixed(2));

      navigate("/cart-buyer-address");
    }
  }

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
              <span>Items total ({cartState?.cart?.length})</span>
              <span>€{itemsPrice.toFixed(2)}</span>
            </div>
            <hr />
            <div className="cart-screen-summary-text">
              <span>Shipping fee</span>
              <span>
                €{cartState.cart.length === 0 ? "0.00" : shippingFee.toFixed(2)}
              </span>
            </div>
            <hr />
            <div className="cart-screen-summary-total">
              <span>Subtotal</span>
              <span>
                €{cartState.cart.length === 0 ? "0.00" : totalPrice.toFixed(2)}
              </span>
            </div>
            <hr />
            <div className="cart-screen-summary-btn" onClick={handleCheckOut}>
              <span>Proceed to check-out</span>
            </div>
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
