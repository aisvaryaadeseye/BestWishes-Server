import React from "react";
import "./style.css";
import ProductSales from "../../component/sellerProductDetailCard/productSales";
import ProductIncome from "../../component/sellerProductDetailCard/productIncome";
import ProductSavess from "../../component/sellerProductDetailCard/productSaves";
import productImg from "../../assets/images/productImg.png";
import SellerProductDetailReview from "../../component/sellerProductDetailReview";
import Pagination from "@material-ui/lab/Pagination";

const SellerProductDetailScreen = () => {
  return (
    <div className="sellerProductDetailScreen">
      <div className="sellerProductDetailScreenTop">
        <span>
          Product <i className="fa-solid fa-caret-right productFaIcon"></i>{" "}
          Products details
        </span>
      </div>
      <div className="sellerProductDetailScreenBottom">
        <div className="productDetailBottomA">
          <ProductSales />
          <ProductIncome />
          <ProductSavess />
        </div>
        <div className="productDetailBottomB">
          <div className="selllerProductDetailmgContainer">
            <img src={productImg} alt="" className="selllerProductDetailImg" />
          </div>
          <div className="selllerProductDetailmgContainer">
            <img src={productImg} alt="" className="selllerProductDetailImg" />
          </div>
          <div className="selllerProductDetailmgContainer">
            <img src={productImg} alt="" className="selllerProductDetailImg" />
          </div>
          <div className="selllerProductDetailmgContainer">
            <img src={productImg} alt="" className="selllerProductDetailImg" />
          </div>
          <div className="selllerProductDetailmgContainer">
            <img src={productImg} alt="" className="selllerProductDetailImg" />
          </div>
          <div className="selllerProductDetailmgContainer">
            <img src={productImg} alt="" className="selllerProductDetailImg" />
          </div>
        </div>
        <div className="productDetailBottomC">
          <div className="productDetailBottomCLeft">
            <div className="productDetailBottomeLeftCFirst">
              <div className="productDetailInputContainer">
                <span>Product Name :</span>
                <input type="text" placeholder="Tye & dye shirt" />
              </div>
              <div className="productDetailInputContainer">
                <span>Product Price:</span>
                <input type="text" placeholder="€49.99" />
              </div>
            </div>
            <div className="productDetailInputContainer">
              <span>Product Details :</span>

              <textarea
                placeholder="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, illum deleniti, numquam labore corrupti debitis recusandae eaque eum accusamus nam at magni maxime hic ad "
                cols="10"
                rows="5"
              ></textarea>
            </div>
            <div className="productDetailInputContainer">
              <span>Origin Story of the Product :</span>
              <textarea
                placeholder="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, illum deleniti, numquam labore corrupti debitis recusandae eaque eum accusamus nam at magni maxime hic ad "
                cols="10"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="productDetailBottomCRight">
            <div className="productDetailInputContainer">
              <span>Categories :</span>
              <input
                type="text"
                placeholder="Clothing"
                className="productDetailRightInput"
              />
            </div>
            <div className="productDetailInputContainer">
              <span>Delivery Time :</span>
              <input
                type="text"
                placeholder="3 to 5 days"
                className="productDetailRightInput"
              />
            </div>
            <div className="productDetailInputContainer">
              <span>Product Specifications :</span>
              <input
                type="text"
                placeholder="handmade"
                className="productDetailRightInput"
              />
            </div>
            <div className="productDetailInputContainer">
              <input
                type="text"
                placeholder="100% cotton wool"
                className="productDetailRightInput"
              />
            </div>
            <div className="productDetailInputContainer">
              <input
                type="text"
                placeholder="Tye & Dye"
                className="productDetailRightInput"
              />
            </div>
          </div>
        </div>
        <hr className="sellerProductReviewDivider" />

        <div className="productDetailBottomD">
          <div className="productDetailBottomDTop">
            <span>Product reviews 200</span>
            <div className="productDetailReviewUnderline"></div>
          </div>
          <div className="productDetailBottomDBottom">
            <SellerProductDetailReview />
            <SellerProductDetailReview />
            <SellerProductDetailReview />
            <SellerProductDetailReview />
            <SellerProductDetailReview />
            <Pagination count={10} variant="outlined" />
          </div>
        </div>
      </div>
    </div> 
  );
};

export default SellerProductDetailScreen;
