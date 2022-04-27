import React from "react";
import "./style.css";
import { productData } from "../data/productData";
import ProductDetail from "../productDetail";
import Pagination from "@material-ui/lab/Pagination";
import { sellerProductTag } from "../data/sellerProductTag";

const SellerHealthBeautyNav = () => {
  return (
    <div className="sellerAllCollectionNav">
      <div className="sellerAllCollectionNav-top">
        <div className="sellerAllCollectionNav-top-title-container">
          <span>Health & Beauty</span>
          <div className="title-underline-health"></div>
        </div>
        {/* <div className="seller-product-top-tag">
          {sellerProductTag.map((x) => {
            return <span className="product-text-tag">{x.id}</span>;
          })}
        </div> */}
      </div>
      <div className="sellerAllCollectionNav-bottom">
        {productData.map((product) => {
          return <ProductDetail key={product.id} product={product} />;
        })}
      </div>
      <div className="pagginationContainer">
        <Pagination count={10} variant="outlined" />
      </div>
    </div>
  );
};

export default SellerHealthBeautyNav;
