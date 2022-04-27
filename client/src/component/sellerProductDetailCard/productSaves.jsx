import React, { useState } from "react";
import "./style.css";
import totalSales from "../../assets/icons/totalSales.jpg";
import { SizeList } from "../data/ProductSizeList";
import allProductSaved from "../../assets/icons/allProductSaved.jpg";

const ProductSavess = () => {
  const [sizeColor, setSizeColor] = useState(null);
  return (
    <div className="productSavesCard">
      <div className="productSavesCardTop">
        <span>Product Saves</span>
        <select name="" id="" className="dropdownContainer">
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
      <div className="productSavesCardMiddle">
        <div className="productSavesCardMiddleLeft">
          <span>30</span>
          <span>
            These are the total amount of time users have saved this product
          </span>
        </div>
        <div className="productSavesCardMiddleRight">
          <img src={allProductSaved} alt="" className="cardImg" />
        </div>
      </div>

      <div className="productSavesCardBottom">
        <hr className="productSavessDivider" />
        <div className="productSavesCardBottomDown">
          <div className="productCardSizeContainerA" sytle={{ Color: "red" }}>
            <span>Size</span>
          </div>

          {SizeList.map((x, i) => {
            return (
              <div
                key={i}
                className="productCardSizeContainerA proCardA "
                style={{ backgroundColor: sizeColor?.id === x.id && "#12799a" }}
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

export default ProductSavess;
