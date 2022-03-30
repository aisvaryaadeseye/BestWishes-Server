import React from "react";
import "./style.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import shopView from "../../assets/icons/shopView.jpg";

const ShopView = () => {
  const options = ["Daily", "Weekly", "Monthly"];
  const defaultOption = options[0];

  const handleDropdown = () => {};
  return (
    <div className="shopView">
      <div className="shopViewTop">
        <h1>Shop Views</h1>

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
      <div className="shopViewMiddle">
        <h1>57, 020</h1>
        <img src={shopView} alt="" className="cardImg" />
      </div>
      <div className="shopViewBottom">
        <p>These are the sum of users that view your page for this week</p>
      </div>
    </div>
  );
};

export default ShopView;
