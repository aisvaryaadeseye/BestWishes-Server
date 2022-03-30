import React from 'react'
import './style.css'
import BlogPost from '../../component/blogPost'
import BlogSlider from '../../component/blogSlider/BlogSlider';


const BlogScreen = () => {
    return (
        <div className='blogScreen'>

            <div className="blogScreenTop">
                <BlogSlider />
            </div>
            <div className="blogScreenBottom">
                <div className="blogScreenBottomLeft">
                    <div className="blogScreenLeftbar">
                        <p>Categories</p>
                        <hr className="solid"></hr>
                        <ul>
                            <li>Lifestyle</li>
                            <li>Tips & Tricks</li>
                            <li>News</li>
                            <li>Events</li>
                            <li>Testimony</li>
                        </ul>
                    </div>
                </div>
                <div className="blogScreenBottomRight">
                    <div className="blogScreenBottomRightTop">
                        <p>Home</p>
                        <i className="fa-solid fa-caret-right"></i>
                        <p>Category</p>
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

            </div>
        </div>
    )
}

export default BlogScreen