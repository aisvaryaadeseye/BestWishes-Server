import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import AllProductsCard from "../../component/overviewCard/allProducts";

const productTag = [
  "Beads",
  "Belt",
  "Cap",
  "Hand bags",
  "Jeans",
  "Jewelries",
  "Pants",
  "Shoes",
  "Trousers",
  "T-shirts",
];
var productTagColor = [];

var linkTags = [
  { link: "all-collections", span: "All Collections" },
  { link: "clothings-accessories", span: "Clothings & Accessories" },
  { link: "health-beauty", span: "Health & Beauty" },
  { link: "pottery", span: "Pottery" },
];
var linkTag = [
  { link: "art-craft", span: "Art & Craft" },
  { link: "other-categories", span: "Other Categories" },
];

const SellerProducts = () => {
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
                <Link to={x.link} className="productLeftTextContainer">
                  <span>{x.span}</span>
                </Link>
              );
            })}
          </div>
          <div className="sellerProductsTopLeftC">
            {linkTag.map((x, i) => {
              return (
                <Link to={x.link} className="productLeftTextContainer">
                  <span>{x.span}</span>
                </Link>
              );
            })}
            <Link to="other-categories" className="productLeftTextContainer">
              <span>Add Product to collection</span>
            </Link>
          </div>
        </nav>
        <div className="sellerProductsTopRight">
          <AllProductsCard />
        </div>
      </div>
      <hr className="productDivider" />
      <div className="sellerProductsBottom">
        <div className="sellerProductsBottomTop">
          <div className="productTagContainer">
            {productTag.map((x, i) => {
              return (
                <div
                  className="productTagText"
                  style={{
                    backgroundColor: productTagColor.includes(x)
                      ? "red"
                      : "white",
                  }}
                  onClick={() => handleTagColor(x, i)}
                >
                  <span>{x}</span>
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

export default SellerProducts;
