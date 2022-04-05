import React from "react";
import { Carousel } from "react-bootstrap";

import "./style.css";

const HomeSlider = () => {
  return (
    <div className="carouselTextContainer">
      <Carousel fade>
        <Carousel.Item interval={1500}>
          <div className="homeSliderImg1Container">
            <div className="homeBgOneText">
              <h1>Sell Your Product</h1>
              <p>
                Best Wishes is a platform where authentic <br />
                handmade products are sold by the creater.
              </p>
              <span className="showText">
                Best Wishes is a platform <br />
                where authentic handmade products
                <br /> are sold by the creater.
              </span>

              <div className="startSelingBtn">
                <button>Start Selling Now</button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <div className="homeSliderImg2Container">
            <div className="homeBgOneText">
              <h2>Discover Unique Pottery</h2>
              <h3>
                Authentic handmade pottery from the most <br /> exclusive
                potters in the world.
              </h3>
              <span>
                Authentic handmade pottery from
                <br /> the most exclusive potters in
                <br /> the world.
              </span>

              <div className="startSelingBtn buyNowBtn">
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <div className="homeSliderImg2Container">
            <div className="homeBgOneText">
              <h4>
                Get the best hand made <br /> leather works
              </h4>
              <h5>
                Authentic handmade pottery from the most <br /> exclusive
                potters in the world.
              </h5>
              <span>
                Authentic handmade pottery <br />
                from the most exclusive potters <br />
                in the world.
              </span>

              <div className=" buyNowBtnPink">
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <div className="homeSlideImgeCon">
            <div className=" homeBgTwoText ">
              <h4>Only the best Artisan </h4>

              <div className="startSelingBtn">
                <button>View Products</button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeSlider;
