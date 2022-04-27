import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Likedbutton from "../../assets/images/Likedbutton.svg";
import LikedBtnDone from "../../assets/icons/LikedButton.svg";

import todayproduct from "../../assets/images/todayproduct4.jpg";

const SellerProductDetail = ({ showDiscount }) => {
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
        <img src={todayproduct} className="todayImage" />

        {showDiscount && (
          <div className="percentageContainer">
            <p>30% off</p>
          </div>
        )}
      </div>
      <div className="sellerProductDetailBottom">
        <p className="productName">Saura bucket</p>
        <div className="starContainer">
          <i className="fa fa-star starIcon" aria-hidden="true"></i>
          <i className="fa fa-star starIcon" aria-hidden="true"></i>
          <i className="fa fa-star starIcon" aria-hidden="true"></i>
          <i className="fa fa-star starIcon" aria-hidden="true"></i>
          <i className="fa fa-star starIcon" aria-hidden="true"></i>
        </div>
        <p className="shopName">Sold by Chester Store</p>
        <div className="priceContainer">
          <p>€49.99</p>
          <div className="priceRight">
            <del> €70.99</del>
          </div>
        </div>
        <div className="priceBtnContainer">
          <button onClick={() => navigate("/seller-product-details-screen")}>
            View product
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerProductDetail;

