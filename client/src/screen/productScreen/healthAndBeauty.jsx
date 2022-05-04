import React, { useState, useContext, useEffect } from "react";
import ProductDetail from "../../component/productDetail";
import "./style.css";
import Pagination from "@material-ui/lab/Pagination";
import ProductScreenSidebar from "../../component/productScreenSidebar";
import { productData } from "../../component/data/productData";
import CartContext from "../../provider/cartProvider";
import UserContext from "../../provider/userProvider";

// import Link
const ProductScreenHealth = () => {
  const {  CART } = useContext(CartContext);
  const { state, USER } = useContext(UserContext);

  useEffect(() => {
    // console.log({ mycart: state.cart });
  });
  return (
    // <productScreen>
    <div className="productScreenContainer">
      <div className="productScreenLeft">
        {/* ===== */}
        <ProductScreenSidebar sideBarText="Health & Beauty" />
      </div>

      <div className="productScreenRight">
        <div className="productScreenRightTop">
          {/* <Link></Link> */}
          <p>
            Home <i className="fa-solid fa-caret-right faRightP"></i>
          </p>

          <p>Health & Beauty</p>
        </div>
        <div className="productScreenRightBottom">
          {state?.allProducts.map((x, i) => {
            return <ProductDetail key={i} product={x} sellerTag={true} />;
          })}

          <div className="pagginationContainer">
            <Pagination count={10} variant="outlined" />
          </div>
        </div>
      </div>
    </div>
    // </ProductScreen>
  );
};

export default ProductScreenHealth;
