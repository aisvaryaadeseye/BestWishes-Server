import React, { useState } from "react";
import reviewGraph from "../../assets/images/reviewGraph.jpg";
// import SellerReviewDetail from "../../component/sellerReviewDetail";
import SellerReviewDetailList from "../../component/sellerReviewDetail/sellerReview";
import Pagination from "@material-ui/lab/Pagination";
import ReviewMobileSlide from "../../component/reviewMobileSlide";

const SellerReviews = () => {
  return (
    <div className="sellerReviews">
      <div className="sellerReviewsTop">
        <span>Reviews</span>
      </div>
      <div className="sellerReviewsMiddle">
        <div className="sellerReviewsMiddleLeft">
          <div className="salesOverviewImaContainer">
            <img src={reviewGraph} alt="" className="salesImgGraph" />
            <div className="reviewTextGraph">
              <span>Ratings Overview</span>
              <select name="" id="" className="graphSelect">
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="WeekYearlyly">Yearly</option>
              </select>
            </div>
          </div>
        </div>
        <div className="sellerReviewsMiddleRight">
          <div className="sellerReviewTable">
            <div className="sellerReviewTableTop">
              <div className="sellerReviewTableTopA">
                <span>Customer reviews</span>
                <span>4.5 0f 5</span>
              </div>
              <div className="sellerReviewTableTopB">
                <span>overal ratings</span>
                <div className="reviewStarContainer">
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarGreyy" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <hr />
            <div className="sellerReviewTableBottom">
              <div className="sellerReviewTableBottomA">
                <div className="reviewStarContainer">
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                </div>
                <span>45%</span>
              </div>
              <div className="sellerReviewTableBottomA">
                <div className="reviewStarContainer">
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarGrey" aria-hidden="true"></i>
                </div>
                <span>25%</span>
              </div>
              <div className="sellerReviewTableBottomA">
                <div className="reviewStarContainer">
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarGrey" aria-hidden="true"></i>
                  <i className="fa fa-star faStarGrey" aria-hidden="true"></i>
                </div>
                <span>25%</span>
              </div>
              <div className="sellerReviewTableBottomA">
                <div className="reviewStarContainer">
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarGrey" aria-hidden="true"></i>
                  <i className="fa fa-star faStarGrey" aria-hidden="true"></i>
                  <i className="fa fa-star faStarGrey" aria-hidden="true"></i>
                </div>
                <span>10%</span>
              </div>
              <div className="sellerReviewTableBottomA">
                <div className="reviewStarContainer">
                  <i className="fa fa-star faStarr" aria-hidden="true"></i>
                  <i className="fa fa-star faStarGrey " aria-hidden="true"></i>
                  <i className="fa fa-star faStarGrey" aria-hidden="true"></i>
                  <i className="fa fa-star faStarGrey" aria-hidden="true"></i>
                  <i className="fa fa-star faStarGrey" aria-hidden="true"></i>
                </div>
                <span>5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sellerReviewsBottom">
        <div className="sellerReviewsBottom-top">
          <span>Product</span>
          <span>Customer</span>
          <span>Ratings</span>
          <span>Reviews</span>
        </div>
        <div className="sellerReviewsBottom-bottom">
          <SellerReviewDetailList />
          <SellerReviewDetailList />
          <SellerReviewDetailList />
          <SellerReviewDetailList />
          <SellerReviewDetailList />
          <SellerReviewDetailList />
        </div>
        <div className="pagginationContainer">
          <Pagination count={10} variant="outlined" />
        </div>
      </div>
      {/* ========seller review bottom mobile */}
      <div className="reviewMobile">
        <div className="reviewMobileText">
          <span>Reviews</span>
        </div>
        <ReviewMobileSlide />
      </div>
    </div>
  );
};

export default SellerReviews;
