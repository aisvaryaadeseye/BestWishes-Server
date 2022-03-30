import React from "react";
import "./style.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import allProductSaved from "../../assets/icons/allProductSaved.jpg";

const AllProductsCard = () => {
  const options = ["Daily", "Weekly", "Monthly"];
  const defaultOption = options[0];

  const handleDropdown = () => {};
  return (
    <div className="allProductsCard">
      <div className="allProductsCardTop">
        <h1>All Products saved</h1>

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
      <div className="allProductsCardMiddle">
        <h1>57, 020</h1>
        <img src={allProductSaved} alt="" className="cardImg" />
      </div>
      <div className="allProductsCardBottom">
        <p>
          These are the total amount of times users have saved your products
        </p>
      </div>
    </div>
  );
};

export default AllProductsCard;
