import React from "react";
import { OurBlogContainer, OurBlogTop, OurBlogBottom } from "./style";
import "./style.css";
import ourBlog1 from "../../assets/images/ourBlog1.jpg";
import ourBlog2 from "../../assets/images/ourBlog2.jpg";
import ourBlog3 from "../../assets/images/ourBlog3.jpg";
import ourBlog4 from "../../assets/images/ourBlog4.jpg";
import ourBlogImg1 from "../../assets/images/ourBlogImg1.jpg";
const OurBlog = () => {
  return (
    <OurBlogContainer>
      <OurBlogTop>
        <div className="todayDetailTextContainer">
          <p>Our Blog</p>
          <div className="ourBlogUnderline"></div>
        </div>
        <div className="seeAllContainer">
          <p>SEE ALL</p>{" "}
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
      </OurBlogTop>
      <OurBlogBottom className="ourBlogBottom">
        <div className="ourBlogBottomLeftContainer">
            <div className="ourBlogImgContainer">
              <img src={ourBlogImg1} alt="" className="ourBlogImg" />
            </div>
        </div>
        <div className="ourBlogBottomRight">
          <h2>New sellers</h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            laudantium soluta iste labore illum eos dolore obcaecati hic nam
            modi eaque atque quos laboriosam, fugiat itaque, deserunt quaerat
            blanditiis reprehenderit laudantium soluta iste labore illum eos
            dolore obcaecati hic nam modi eaque atque quos laboriosam, fugiat
            itaque, deserunt quaerat blanditiis reprehenderitlaudantium soluta
            iste labore illum eos dolore obcaecati hic nam modi eaque atque quos
            laboriosam, fugiat itaque, deserunt quaerat blanditiis
            reprehenderit.
          </h3>

          <div className="readmore">
            <p>
              Read more about it on the blog{" "}
              <i
                className="fa fa-arrow-right arrowRight"
                aria-hidden="true"
              ></i>{" "}
            </p>
          </div>
        </div>
      </OurBlogBottom>
    </OurBlogContainer>
  );
};

export default OurBlog;
