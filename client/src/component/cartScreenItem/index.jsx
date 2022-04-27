import React from "react";
import "./style.css";
import orderProductImg from "../../assets/images/orderProductImg.jpg";
const CartScreenItem = () => {
  //
  const getStarRating = () => {
    [...Array(5)].map((star) => {
      return <span className="cart-item-star">&#9733;</span>;
    });
  };
  return (
    <div className="cart-screen-item">
      <div className="cart-screen-item-left">
        <img src={orderProductImg} alt="" className="cart-screen-img" />
      </div>
      <div className="cart-screen-item-right">
        <h5>Jersey</h5>
        <div className="cart-item-text">
          <span>Product ratings : </span>
          <div className="star-rating">
            {[...Array(5)].map((star) => {
              return <span className="cart-item-star">&#9733;</span>;
            })}
          </div>
        </div>
        <div className="cart-item-text">
          <span>Size : </span> <span>L </span>
        </div>
        <h4>€49.99</h4>
        <div className="cart-item-right-bottom">
          <div className="cart-remove">
            <i class="fa fa-trash" aria-hidden="true"></i>
            <span>Remove</span>
          </div>
          <div className="add-remove-div">
            <div className="add-remove-btn">
              <i class="fa fa-minus" aria-hidden="true"></i>
            </div>
            <div className="cart-item-counter">
              <span>0</span>
            </div>
            <div className="add-remove-btn">
              <i class="fa fa-plus" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreenItem;
