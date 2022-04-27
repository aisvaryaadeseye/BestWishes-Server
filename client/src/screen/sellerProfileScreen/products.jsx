import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import allProductSaved from "../../assets/icons/allProductSaved.jpg";

var productTag = [
  { id: "Beads" },
  { id: "Belt" },
  { id: "Caps" },
  { id: "Hand bags" },
  { id: "Jeans" },
  { id: "Jewelries" },
  { id: "Shoes" },
  { id: "Trousers" },
  { id: "T-shirt" },
];
var productTagColor = [];

var linkTags = [
  { link: "all-collections", span: "All Collections" },
  {
    link: "clothings-accessories",
    span: "Clothings & Accessories",
  },
  { link: "health-beauty", span: "Health & Beauty" },
  { link: "pottery", span: "Pottery" },
  { link: "art-craft", span: "Art & Craft" },
  { link: "other-categories", span: "Other Categories" },
];

const SellerProducts = () => {
  const [linkBgColor, setLinkBgColor] = useState([]);
  const [productCat, setProductCat] = useState("All Collections");

  const handleProductLink = (x) => {
    setLinkBgColor(x);
    setProductCat(x.span);
  };

  const handleTagColor = (x) => {
    if (productTagColor.includes(x)) {
      productTagColor = productTagColor.filter((rem) => rem !== x);
    } else {
      productTagColor.push(x);
      console.log(productTagColor);
    }
  };

  return (
    <div className="sellerProducts">
      <div className="sellerProductsTop">
        <nav className="sellerProductsTopLeft">
          <div className="sellerProductsTopLeftA">
            <span>Products</span>
          </div>
          <div className="sellerProductsTopLeftB">
            {linkTags.map((x, i) => {
              return (
                <Link
                  to={x.link}
                  key={i}
                  style={{
                    backgroundColor: linkBgColor?.link === x.link && "#fef5ed",
                  }}
                  className="productLeftTextContainer"
                  onClick={() => handleProductLink(x)}
                >
                  <span
                    style={{ color: linkBgColor?.link === x.link && "#f69014" }}
                  >
                    {x.span}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="sellerProductsTopRight">
          <ProductsCard productCat={productCat} />
        </div>
      </div>

      <Link to="/add-product-screen">
        <i className="fa fa-plus faAddProduct" aria-hidden="true"></i> Add
        Product to collection
      </Link>
      <hr className="productDivider" />
      <div className="sellerProductsBottom">
        <div className="sellerProductsBottomTop">
          <div className="productTagContainer">
            {productTag.map((x, i) => {
              return (
                <div
                  key={i}
                  className="productTagText"
                  style={{
                    backgroundColor: productTagColor?.x && "red",
                  }}
                  onClick={() => handleTagColor(x)}
                >
                  <span>{x.id}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="sellerProductsBottomDown">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const ProductsCard = ({ productCat }) => {
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
        <div className="productCardCate">
          <span>({productCat})</span>
          <h4>57, 020</h4>
        </div>
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

export default SellerProducts;
