import React from "react";
import "./style.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import shopLikes from "../../assets/icons/shopLikes.jpg";

const ShopLikes = () => {
  const handleDropdown = () => {};
  return (
    <div className="shopLikes">
      <div className="shopLikesTop">
        <h1>Shop Likes</h1>

        <select
          name=""
          id=""
          className="dropdownContainer"
          onClick={handleDropdown}
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
      <div className="shopLikesMiddle">
        <h1>57, 020</h1>
        <img src={shopLikes} alt="" className="cardImg" />
      </div>
      <div className="shopLikesBottom">
        <p>These are the sum of likes your shop has received for this week</p>
      </div>
    </div>
  );
};

export default ShopLikes;
