import React, { useState,useContext } from "react";
import ProductDetail from "../../component/productDetail";
import { productScreen, productScreenLeft, ProductScreenRight } from "./style";
import "./style.css";
import Pagination from "@material-ui/lab/Pagination";
import ProductScreenSidebar from "../../component/productScreenSidebar";
import { productData } from "../../component/data/productData";
import UserContext from "../../provider/userProvider";

// import Link
const ProductScreenArt = () => {
  const { state, USER } = useContext(UserContext);

  return (
    <div className="productScreenContainer">
      <div className="productScreenLeft">
        {/* ===== */}
        <ProductScreenSidebar sideBarText="Art & Craft" />
      </div>

      <div className="productScreenRight">
        <div className="productScreenRightTop">
          {/* <Link></Link> */}
          <p>
            Home <i className="fa-solid fa-caret-right faRightP"></i>
          </p>

          <p>Art & Craft</p>
        </div>
        <div className="productScreenRightBottom">
          {state?.allProducts.map((product) => {
            return (
              <ProductDetail
                key={product._id}
                product={product}
                sellerTag={true}
              />
            );
          })}
          {/* <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail /> */}
          <div className="pagginationContainer">
            <Pagination count={10} variant="outlined" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreenArt;
