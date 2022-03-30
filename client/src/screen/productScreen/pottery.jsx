import React, { useState } from 'react'
import ProductDetail from '../../component/productDetail'
import { productScreen, productScreenLeft, ProductScreenRight } from './style'
import './style.css'
import Pagination from '@material-ui/lab/Pagination';
import ProductScreenSidebar from '../../component/productScreenSidebar';
import Navbar from '../../component/navbar';


// import Link 
const ProductScreenPottery = () => {

    
   
    return (
        <productScreen>
            <Navbar />
             <div className='productScreenContainer'>
            <div className="productScreenLeft">
                {/* ===== */}
                <ProductScreenSidebar />

            </div>


            <div className="productScreenRight">
                <div className="productScreenRightTop">
                    {/* <Link></Link> */}
                    <p>Home <i className="fa-solid fa-caret-right faRightP"></i></p>
                    
                    <p>Pottery</p>
                </div>
                <div className="productScreenRightBottom">
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <div className="pagginationContainer">
                        <Pagination count={10}  variant="outlined" />
                    </div>
                </div>
            </div>

        </div>
        </productScreen>
       
    )

    
}

export default ProductScreenPottery