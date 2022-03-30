import React from 'react'
import { CustomerReviewContainer, CustomerReviewLeft, CustomerReviewRight } from './style'
import './style.css'
import customerImg from '../../assets/images/customerImg.jpg'
const CustomerReview = () => {
    return (
        <CustomerReviewContainer>
            <div className='customerReviewLeft'>
                <img src={customerImg} className="customerImg" />

            </div>
            <div className='customerReviewRight'>
                <h2>Abram Carder</h2>
                <h3>Potter</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ea voluptate, fuga perferendis sed iure ut maxime nihil.</p>
                <div className="reviewTag">
                    <p>Seller</p>
                </div>
            </div>

        </CustomerReviewContainer>
    )
}

export default CustomerReview