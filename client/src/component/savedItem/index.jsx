import React from "react";
import "./style.css";
import orderProductImg from "../../assets/images/orderProductImg.jpg";
import LikedButton from "../../assets/icons/LikedButton.svg";

const SavedItem = () => {
  return (
    <div className="savedItem">
      <div className="savedItemLeft">
        <div className="likeBtnContainer">
          <img src={LikedButton} className="likeBtn" />
        </div>
        <img src={orderProductImg} alt="" className="savedItemIMG" />
      </div>
      <div className="savedItemRight">
        <h1>Tye and dye T-shirt mode</h1>
        <h2>Sold by Chesterfield store</h2>

        <div className="savedItemPriceContainer">
          <h3>€49.99</h3>
          <div className="priceRight">
            <del> €70.99</del>
          </div>
        </div>
        <div className="orderstatusContainer">
          <div className="orderstatusLeft">
            <span>Buy now</span>
          </div>
          <div className="orderstatusRight">
            <span>
              Remove <i className="fa fa-trash" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedItem;
