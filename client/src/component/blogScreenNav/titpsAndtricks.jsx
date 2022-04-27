import React from "react";
import BlogPost from "../blogPost";

const BlogTipsAndTricks = () => {
  return (
      <div className="blogScreenBottomRight">
        <div className="blogScreenBottomRightTop">
          <span>
            Home <i className="fa-solid fa-caret-right faBlogRight"></i>
            Category<i className="fa-solid fa-caret-right faBlogRight"></i>{" "}
            Tips and Tricks
          </span>
        </div>
        <div className="blogScreenBottomRightBottom">
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
      </div>
  );
};

export default BlogTipsAndTricks;
