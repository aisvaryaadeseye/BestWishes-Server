import React from "react";
import "./style.css";
// import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import totalIcome from "../../assets/icons/totalIcome.jpg";

const TotalIncomeCard = () => {
  const options = ["Daily", "Weekly", "Monthly"];
  const defaultOption = options[0];

  const handleDropdown = () => {};
  return (
    <div className="TotalIncomeCard">
      <div className="TotalIncomeCardTop">
        <h1>Total Income</h1>

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
      <div className="TotalIncomeCardMiddle">
        <h1>57, 020</h1>
        <img src={totalIcome} alt="" className="cardImg" />
      </div>
      <div className="TotalIncomeCardBottom">
        <p>These are the total icome made last week</p>
      </div>
    </div>
  );
};

export default TotalIncomeCard;
