import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import orderProductImg from "../../assets/images/orderProductImg.jpg";
import CartContext from "../../provider/cartProvider";
const CartScreenItem = ({ item }) => {
  const { CART } = useContext(CartContext);

  const [qty, setQty] = useState(0);
  //
  const getStarRating = [...Array(5)].map((star, i) => {
    return (
      <span key={i} className="cart-item-star">
        &#9733;
      </span>
    );
  });

  // useEffect(() => {
  //   console.log({ item: item });
  // }, []);

  function handleRemoveItem(_id) {
    CART.removeFromCart(_id);
  }

  function handleAdd() {
    setQty(qty + 1);
  }
  function handleRemove() {
    if (qty > 0) {
      setQty(qty - 1);
    }
  }
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
          <div className="cart-remove" onClick={() => CART.removeFromCart()}>
            <i className="fa fa-trash" aria-hidden="true"></i>
            <span>Remove</span>
          </div>
          <div className="add-remove-div">
            <div className="add-remove-btn" onClick={handleRemove}>
              <i className="fa fa-minus" aria-hidden="true"></i>
            </div>
            <div className="cart-item-counter">
              <span>{qty}</span>
            </div>
            <div className="add-remove-btn" onClick={handleAdd}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreenItem;
