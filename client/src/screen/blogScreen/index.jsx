import React from "react";
import "./style.css";
import BlogPost from "../../component/blogPost";
import BlogSlider from "../../component/blogSlider/BlogSlider";
import { Link, Outlet } from "react-router-dom";
const BlogScreen = () => {
  var navLinks = [
    { text: "lifestyle", link: "lifestyle" },
    { text: "Tips & Tricks", link: "tips-tricks" },
    { text: "News", link: "news" },
    { text: "Events", link: "events" },
    { text: "Update", link: "update" },
  ];
  return (
    <div className="blogScreen">
      <div className="blogScreenTop">
        <BlogSlider />
      </div>
      <div className="blogScreenBottom">
        <div className="blogScreenBottomLeft">
          <div className="blogScreenLeftbar">
            <p>Categories</p>
            <hr className="solid"></hr>

            <nav className="">
              {navLinks.map((x, i) => {
                return (
                  <Link key={i} to={x.link}>
                    <div className="blogNav">{x.text}</div>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default BlogScreen;
