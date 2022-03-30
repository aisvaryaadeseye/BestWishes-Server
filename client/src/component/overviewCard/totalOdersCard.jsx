import React from "react";
import "./style.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import totalOrders from "../../assets/icons/totalOrders.jpg";

const TotalOrdersCard = () => {
  const options = ["Daily", "Weekly", "Monthly"];
  const defaultOption = options[0];

  const handleDropdown = () => {
    // console.log(options.value);
  };
  return (
    <div className="totalOrdersCard">
      <div className="totalOrdersCardTop">
        <h1>Total orders</h1>

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
      <div className="totalOrdersCardMiddle">
        <h1>57, 020</h1>
        <img src={totalOrders} alt="" className="cardImg" />
      </div>
      <div className="totalOrdersCardBottom">
        <p>These are the total orders made last week</p>
      </div>
    </div>
  );
};

export default TotalOrdersCard;
