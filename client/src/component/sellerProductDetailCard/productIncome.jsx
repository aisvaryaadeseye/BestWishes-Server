import React, { useState } from "react";
import "./style.css";
import totalIcome from "../../assets/icons/totalIcome.jpg";
import { SizeList } from "../data/ProductSizeList";

const ProductIncome = () => {
  const [sizeColor, setSizeColor] = useState(null);
  return (
    <div className="productIncomeCard">
      <div className="productIncomeCardTop">
        <span>Product Income</span>
        <select name="" id="" className="dropdownContainer">
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
      <div className="productIncomeCardMiddle">
        <div className="productIncomeCardMiddleLeft ">
          <span>€320</span>
          <span>This is the total income generated from this product</span>
        </div>
        <div className="productIncomeCardMiddleRight">
          <img src={totalIcome} alt="" className="cardImg" />
        </div>
      </div>

      <div className="productIncomeCardBottom">
        <hr className="productIcomeDivider" />
        <div className="productIncomeCardBottomDown">
          <div className="productCardSizeContainerA" sytle={{ Color: "red" }}>
            <span>Size</span>
          </div>
          {SizeList.map((x, i) => {
            return (
              <div
                key={i}
                className="productCardSizeContainerA proCardA "
                style={{ backgroundColor: sizeColor?.id === x.id && "#00b533" }}
                onClick={() => setSizeColor(x)}
              >
                <span>{x.id}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductIncome;
