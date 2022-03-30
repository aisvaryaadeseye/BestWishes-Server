import React from 'react'
import './style.css'
import blogPostImg from '../../assets/images/blogPostImg.jpg'

const BlogPost = () => {
    return (
        <div className='blogPost'>
            <div className="blogPostLeft">
                <div className="blogPostImgContainer">
                    <img src={blogPostImg} alt="" className="blogPostImg" />
                    <div className="blogPosttag">
                        <p>update</p>
                    </div>
                </div>
            </div>
            <div className="blogPostRight">
                <h2>New sellers</h2>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ut minus commodi cum tenetur laudantium tempore illum nihil, ratione asperiores odio ex atque corrupti ullam,  .</h3>
                <p>Read more</p>
            </div>
        </div>
    )
}

export default BlogPost