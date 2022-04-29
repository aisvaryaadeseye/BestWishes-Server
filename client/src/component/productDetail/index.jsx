import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import CartContext from "../../provider/cartProvider";
import Likedbutton from "../../assets/images/Likedbutton.svg";
import LikedBtnDone from "../../assets/icons/LikedButton.svg";
import { Link } from "react-router-dom";
import todayproduct from "../../assets/images/todayproduct4.jpg";

const ProductDetail = ({ showDiscount, product, sellerTag }) => {
  const [likeBtn, setLikeBtn] = useState(false);
  const { cartState, CART } = useContext(CartContext);
  const [added, setAdded] = useState(false);
  const handleLike = () => {
    setLikeBtn(!likeBtn);
  };

  useEffect(() => {
    // console.log({ product: product.proFrontIMAGE[0].URL });
  }, []);
  // <Link to={{ pathname: `/product/${product._id}`}}>

  return (
    <div className="ProductDetail">
      <div className="ProductDetailTop">
        <div className="likeBtnContainer" onClick={handleLike}>
          <img src={likeBtn ? LikedBtnDone : Likedbutton} className="likeBtn" />
        </div>
        <Link
          to={{ pathname: `/product-detail-screen/${product._id}` }}
          className="product-img-con"
        >
          <img
            src={product && product?.proFrontIMAGE[0]?.URL}
            className="todayImage"
          />
        </Link>

        {showDiscount && (
          <div className="percentageContainer">
            <p>30% off</p>
          </div>
        )}
      </div>
      <div className="ProductDetailBottom">
        <p className="productName">{product && product.productName}</p>
        <div className="starContainer">
          <i className="fa fa-star starIcon" aria-hidden="true"></i>
          <i className="fa fa-star starIcon" aria-hidden="true"></i>
          <i className="fa fa-star starIcon" aria-hidden="true"></i>
          <i className="fa fa-star starIcon" aria-hidden="true"></i>
          <i className="fa fa-star starIcon" aria-hidden="true"></i>
        </div>
        {sellerTag && (
          <Link
            to="/seller-product-collection/all-collections"
            className="shopName"
          >
            <span> Sold by Chester Store</span>
          </Link>
        )}

        <div className="priceContainer">
          <p>€{product && product.productPrice}</p>
          <div className="priceRight">
            <del> €70.99</del>
          </div>
        </div>
        {added ? (
          <div className="priceBtnContainerAdded">
            <button>
              <i className="fa fa-cartfa fa-shopping-cart faCart"></i> Added to
              Cart
            </button>
          </div>
        ) : (
          <div
            className="priceBtnContainer"
            onClick={() => {
              setAdded(true);
            }}
          >
            <button onClick={() => CART.addToCart(product._id)}>
              <i className="fa fa-cartfa fa-shopping-cart faCart"></i> Add to
              Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
