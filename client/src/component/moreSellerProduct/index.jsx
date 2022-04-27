import React, { useState } from "react";
import "./style.css";
import moreSellerProduct from "../../assets/images/moreSellerProduct.jpg";
import Likedbutton from "../../assets/images/Likedbutton.svg";
import LikedBtnDone from "../../assets/icons/LikedButton.svg";
const MoreSellerProduct = () => {
  const [likeBtn, setLikeBtn] = useState(false);

  const handleLike = () => {
    setLikeBtn(!likeBtn);
  };
  return (
    <div className="more-seller-product">
      <div className="more-seller-product-top">
        <div className="likeBtnContainer" onClick={handleLike}>
          <img src={likeBtn ? LikedBtnDone : Likedbutton} className="likeBtn" />
        </div>
        <img src={moreSellerProduct} alt="" className="more-seller-pro-img" />
      </div>
      <div className="more-seller-product-bottom">
        <span>Shade of art, painted with from love artisitic stroke</span>
        <h4>€49.99</h4>
      </div>
    </div>
  );
};

export default MoreSellerProduct;
