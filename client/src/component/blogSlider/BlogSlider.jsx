import React from 'react'
import { Carousel } from "react-bootstrap"

import blogImg3 from '../../assets/images/blogImg1.jpg';
import blogImg2 from '../../assets/images/blogImg2.jpg';
import blogImg1 from '../../assets/images/blogImg3.jpg';

function BlogSlider() {
    return (
        <div className='carouselTextContainer'>
            <Carousel  fade >
                <Carousel.Item>
                    <img
                        className="d-block carouselImg"
                       
                        src={blogImg1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <h1>Boost your sales</h1>
                        <p className='BlogSliderText'>Get more customers today, by simply using this new steps</p>
                        <div className="carouselReadBtn">
                            <button>Read article <i className="fa fa-arrow-right arrowRight" aria-hidden="true"></i></button>

                        </div>

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block carouselImg"
                        style={{ height: 400 }}
                        src={blogImg2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Boost your sales</h1>
                        <p className='BlogSliderText'>Get more customers today, by simply using this new steps</p>
                        <div className="carouselReadBtn">
                            <button>Read article <i className="fa fa-arrow-right arrowRight" aria-hidden="true"></i></button>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block carouselImg"
                        style={{ height: 400 }}
                        src={blogImg3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Boost your sales</h1>
                        <p className='BlogSliderText'>Get more customers today, by simply using this new steps</p>
                        <div className="carouselReadBtn">
                            <button>Read article <i className="fa fa-arrow-right arrowRight" aria-hidden="true"></i></button>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default BlogSlider