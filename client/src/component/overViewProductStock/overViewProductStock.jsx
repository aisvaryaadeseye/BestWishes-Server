import React from "react";
import "./style.css";

const OverViewProductStock = ({ stockType, colorType }) => {
  return (
    <div className="overViewProductStock">
      <p>Tye & dye hand made shirt</p>
      <p>#012345</p>
      <p>€45.99</p>
      <p>22/07/22</p>
      <div className="stockContainer">
        <span style={{ color: colorType }}>{stockType}</span>
      </div>
      <p>500pcs</p>
    </div>
  );
};

export default OverViewProductStock;
