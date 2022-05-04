import React, { useContext } from "react";
import "./style.css";
import { productData } from "../data/productData";
import ProductDetail from "../productDetail";
import Pagination from "@material-ui/lab/Pagination";
import { sellerProductTag } from "../data/sellerProductTag";
import UserContext from "../../provider/userProvider";

const SellerOtherCategoriesNav = () => {
  const { state, USER } = useContext(UserContext);

  return (
    <div className="sellerAllCollectionNav">
      <div className="sellerAllCollectionNav-top">
        <div className="sellerAllCollectionNav-top-title-container">
          <span>Other Categories</span>
          <div className="title-underline-others"></div>
        </div>
       
      </div>
      <div className="sellerAllCollectionNav-bottom">
        {state?.allProducts.map((product) => {
          return <ProductDetail key={product._id} product={product} />;
        })}
      </div>
      <div className="pagginationContainer">
        <Pagination count={10} variant="outlined" />
      </div>
    </div>
  );
};

export default SellerOtherCategoriesNav;
