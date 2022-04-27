import React from "react";
import "./style.css";

const SellerProductDetailReview = () => {
  return (
    <div className="sellerProductDetailReview">
      <div className="sellerProductDetailReviewTop">
        <span>Marcus Kenter</span>
        <span>11/02/2022</span>
      </div>
      <div className="sellerProductReviewIconContainer">
        <i className="fa fa-star selllerStartIcon" aria-hidden="true"></i>
        <i className="fa fa-star selllerStartIcon" aria-hidden="true"></i>
        <i className="fa fa-star selllerStartIcon" aria-hidden="true"></i>
        <i className="fa fa-star selllerStartIcon" aria-hidden="true"></i>
        <i className="fa fa-star selllerStartIcon" aria-hidden="true"></i>
      </div>
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio id quod
        culpa quis, eligendi enim magni adipisci deleniti doloribus, consectetur
        modi voluptates omnis excepturi sunt? Veniam officiis possimus enim
        nihil?
      </span>
      <hr className="sellerProductDivider" />
    </div>
  );
};

export default SellerProductDetailReview;
