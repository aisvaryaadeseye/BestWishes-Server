import React from "react";
import "./style.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import totalSales from "../../assets/icons/totalSales.jpg";

const TotalSalesCard = () => {
  const options = ["Daily", "Weekly", "Monthly"];
  const defaultOption = options[0];

  const handleDropdown = () => {
    // console.log(options.value);
  };
  return (
    <div className="totalSalesCard">
      <div className="totalSalesCardTop">
        <h1>Total sales</h1>

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
      <div className="totalSalesCardMiddle">
        <h1>57, 020</h1>
        <img src={totalSales} alt="" className="cardImg" />
      </div>
      <div className="totalSalesCardBottom">
        <p>These are the total sales made last week</p>
      </div>
    </div>
  );
};

export default TotalSalesCard;
