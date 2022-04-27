import React from "react";
import ProductDetail from "../../component/productDetail";
import "./style.css";
import Pagination from "@material-ui/lab/Pagination";
import ProductScreenSidebar from "../../component/productScreenSidebar";
import { productData } from "../../component/data/productData";

const ProductScreenClothing = () => {
  return (
    <div className="productScreenContainer">
      <div className="productScreenLeft">
        <ProductScreenSidebar sideBarText="Clothing & Accessories" />
      </div>

      <div className="productScreenRight">
        <div className="productScreenRightTop">
          <p>
            Home <i className="fa-solid fa-caret-right faRightP"></i>
          </p>

          <p>Clothing & Accessories</p>
        </div>
        <div className="productScreenRightBottom">
          {productData.map((product) => {
            return (
              <ProductDetail
                key={product.id}
                product={product}
                sellerTag={true}
              />
            );
          })}

          <div className="pagginationContainer">
            <Pagination count={10} variant="outlined" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreenClothing;
