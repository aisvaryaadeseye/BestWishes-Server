import React, { useState, useContext } from "react";
import "./style.css";
import CartContext from "../../provider/cartProvider";
import UserContext from "../../provider/userProvider";

const CartScreenItem = ({ item }) => {
  const { CART } = useContext(CartContext);
  const { state, USER } = useContext(UserContext);

  const [qty, setQty] = useState(0);
  //
  const getStarRating = [...Array(4)].map((star, i) => {
    return (
      <span key={i} className="cart-item-star">
        &#9733;
      </span>
    );
  });

  return (
    <div className="cart-screen-item">
      <div className="cart-screen-item-left">
        <img src={item.proFrontIMAGE} alt="" className="cart-screen-img" />
      </div>
      <div className="cart-screen-item-right">
        <h5>{item.productName}</h5>
        <div className="cart-item-text">
          <span>Product ratings : </span>
          <div className="star-rating">
            {getStarRating}
            {/* {[...Array(5)].map((star, i) => {
              return <span className="cart-item-star">&#9733;</span>;
            })} */}
          </div>
        </div>
        <div className="cart-item-text">
          <span>Size : </span> <span>L </span>
        </div>
        <h4>€{item.productPrice}</h4>
        <div className="cart-item-right-bottom">
          <div
            className="cart-remove"
            onClick={() => CART.removeCartItem(item._id)}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
            <span>Remove</span>
          </div>
          <div className="add-remove-div">
            <div
              className="add-remove-btn"
              onClick={() => CART.removeFromCart(item._id)}
            >
              <i className="fa fa-minus" aria-hidden="true"></i>
            </div>
            <div className="cart-item-counter">
              <span>{item.qty}</span>
            </div>
            <div
              className="add-remove-btn"
              onClick={() => CART.AddToCart(item._id, state?.user?.user?._id)}
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreenItem;
