import React, { useState } from "react";
// import "./style.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { productData } from "../../component/data/productData";
import MoreSellerProduct from "../moreSellerProduct";
import productImgS from "../../assets/images/productImgS.jpg";
import Likedbutton from "../../assets/images/Likedbutton.svg";
import LikedBtnDone from "../../assets/icons/LikedButton.svg";
const items = [];
const slideResponsive = {
  0: { items: 1 },
  300: { items: 1 },
  400: { items: 1 },
  500: { items: 1 },
  600: { items: 1 },
  700: { items: 1 },
  800: { items: 1 },
  900: { items: 1 },
  1100: { items: 1 },
  1224: { items: 1 },
  1324: { items: 1 },
  1424: { items: 1 },
  1524: { items: 1 },
  1624: { items: 1 },
  1924: { items: 1 },
};

const ProductImg = () => {
  const [likeBtn, setLikeBtn] = useState(false);

  const handleLike = () => {
    setLikeBtn(!likeBtn);
  };
  return (
    <div className="product-detail-img-con">
      <div className="likeBtnContainer" onClick={handleLike}>
        <img src={likeBtn ? LikedBtnDone : Likedbutton} className="likeBtn" />
      </div>
      <img src={productImgS} alt="" className="product-img-s" />
    </div>
  );
};
const ProductDetailImgSlide = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={productData.map((product) => {
        return <ProductImg />;
      })}
      responsive={slideResponsive}
      controlsStrategy="alternate"
    />
  );
};

export default ProductDetailImgSlide;
