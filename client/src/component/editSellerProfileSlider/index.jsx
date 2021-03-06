import React from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";

import sellerImga from "../../assets/images/sellerImga.jpg";
import sellerImgb from "../../assets/images/sellerImgb.jpg";
const sellerImgData = [
  {
    img: sellerImga,
    title: "Welcome To Chesterfield",
    description: "Home Of Authentic Handcrafted Products",
  },
  {
    img: sellerImgb,
    title: "",
    description: "",
  },
];
function EditSellerProfileSlider({ storeName }) {
  return (
    <div className="editSellerContainer">
      <Carousel fade>
        {sellerImgData.map((x, i) => {
          return (
            <Carousel.Item key={i}>
              <div className="editSellerImageContainer" key={i}>
                <img src={x.img} alt="" className="editSellerImg" />
                <div className="editSellerTextContainer">
                  <span>Welcome to {storeName}</span>
                  {/* <span>{x.description}</span> */}
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default EditSellerProfileSlider;
