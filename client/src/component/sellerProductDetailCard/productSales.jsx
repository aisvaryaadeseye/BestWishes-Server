import React, { useState } from "react";
import "./style.css";
import totalSales from "../../assets/icons/totalSales.jpg";
import { SizeList } from "../data/ProductSizeList";

const ProductSales = () => {
  const [sizeColor, setSizeColor] = useState(null);
  return (
    <div className="productSaleCard">
      <div className="productSaleCardTop">
        <span>Product Sales</span>
        <select name="" id="" className="dropdownContainer">
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
      <div className="productSaleCardMiddle">
        <div className="productSaleCardMiddleLeft">
          <span>200pcs</span>
          <span>These are the total sales from last week of this products</span>
        </div>
        <div className="productSaleCardMiddleRight">
          <img src={totalSales} alt="" className="cardImg" />
        </div>
      </div>

      <div className="productSaleCardBottom">
        <hr className="productSalesDivider" />
        <div className="productSaleCardBottomDown">
          <div className="productCardSizeContainerA" sytle={{ Color: "red" }}>
            <span>Size</span>
          </div>

          {SizeList.map((x, i) => {
            return (
              <div
                key={i}
                className="productCardSizeContainerA proCardA "
                style={{ backgroundColor: sizeColor?.id === x.id && "#ff5c8d" }}
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

export default ProductSales;
