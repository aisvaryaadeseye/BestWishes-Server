import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Likedbutton from "../../assets/images/Likedbutton.svg";
import LikedBtnDone from "../../assets/icons/LikedButton.svg";

import todayproduct from "../../assets/images/todayproduct4.jpg";

const SellerProductDetail = ({ showDiscount, product }) => {
  //
  const [likeBtn, setLikeBtn] = useState(false);
  const navigate = useNavigate();
  const handleLike = () => {
    setLikeBtn(!likeBtn);
  };
  return (
    <div className="sellerProductDetail">
      <div className="sellerProductDetailTop">
        <div className="likeBtnContainer" onClick={handleLike}>
          <img src={likeBtn ? LikedBtnDone : Likedbutton} className="likeBtn" />
        </div>
        <img
          src={product && product?.proFrontIMAGE[0]?.URL}
          className="todayImage"
        />

        {showDiscount && (
          <div className="percentageContainer">
            <p>30% off</p>
          </div>
        )}
      </div>
      <div className="sellerProductDetailBottom">
        <p className="productName">{product?.productName}</p>
        <div className="starContainer">
          <i className="fa fa-star starIcon" aria-hidden="true"></i>
          <i className="fa fa-star starIcon" aria-hidden="true"></i>
          <i className="fa fa-star starIcon" aria-hidden="true"></i>
          <i className="fa fa-star starIcon" aria-hidden="true"></i>
          <i className="fa fa-star starIcon" aria-hidden="true"></i>
        </div>
        {/* <p className="shopName">Sold by Chester Store</p> */}
        <div className="priceContainer">
          <p>€{product?.productPrice}</p>
          <div className="priceRight">
            <del> €70.99</del>
          </div>
        </div>
        {/* <div className="priceBtnCon"> */}
        <Link
          className="priceBtnCon"
          to={{ pathname: `/seller-product-details-screen/${product?._id}` }}
        >
          <span className="price-btn-span">View product</span>
        </Link>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SellerProductDetail;
