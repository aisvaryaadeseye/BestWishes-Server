import React, { useState } from "react";
import "./style.css";
import orderProductImg from "../../assets/images/orderProductImg.jpg";
import customerImg from "../../assets/images/customerImg.jpg";

import { Button, Modal } from "react-bootstrap";
const SellerReviewDetail = ({ showModalreview }) => {
  //   const showStarIcon = () => {
  //     [...Array(5)].map((star, index) => {
  //       return <span className="star">&#9733;</span>;
  //     });
  //   };
  const [show, setShow] = useState(false);

  const handleCloseModal = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const showModal = () => {
    return <span>yusuf</span>;
  };
  return (
    <div className="sellerReviewDetail" onClick={() => setShow(true)}>
      <div>
        <img src={orderProductImg} alt="" className="product-review-img" />
        <span>A tincidunt egestas magna tellus.</span>
      </div>
      <div>
        <img src={customerImg} alt="" className="customer-review-img" />
        <span>A tincidunt egestas magna tellus.</span>
      </div>
      <div>
        <span className="customer-review-srar">&#9733;</span>
        <span className="customer-review-srar">&#9733;</span>
        <span className="customer-review-srar">&#9733;</span>
        <span className="customer-review-srar">&#9733;</span>
        <span className="customer-review-srar">&#9733;</span>
      </div>
      <div className="customer-review-text">
        Justo lacus quis eu enim tristique imperdiet mas........
      </div>
    </div>
  );
};

export default SellerReviewDetail;
