import React from "react";
import "./style.css";
import Pagination from "@material-ui/lab/Pagination";
import SellerProductDetailReview from "../sellerProductDetailReview";

const ProductDetailProductReviews = () => {
  return (
    <div className="product-detail-all-review">
      <div className="product-detail-all-review-top">
        <SellerProductDetailReview />
        <SellerProductDetailReview />
        <SellerProductDetailReview />
      </div>
      <div className="product-detail-all-review-bottom">
        <div className="pagginationContainer">
          <Pagination count={10} variant="outlined" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailProductReviews;
