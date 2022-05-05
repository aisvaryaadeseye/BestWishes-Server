import React, { useEffect, useState } from "react";
import "./style.css";
import ProductDetail from "../productDetail";
import Pagination from "@material-ui/lab/Pagination";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useIsMounted } from "../isMounted";
const SellerHealthBeautyNav = () => {
  //
  let { id } = useParams();
  const [sellerProduct, setSellerProduct] = useState([]);
  const isMounted = useIsMounted();

  async function getSellerProducts() {
    try {
      const { data } = await axios.get(
        `/api/auth/seller-products?sellerID=${id}`
      );
      if (data) {
        if (isMounted.current) {
          setSellerProduct(data);
        }
      }

      // console.log({ sellerProduct: sellerProduct });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSellerProducts();
    // console.log({ id: id });
  }, [sellerProduct]);

  return (
    <div className="sellerAllCollectionNav">
      <div className="sellerAllCollectionNav-top">
        <div className="sellerAllCollectionNav-top-title-container">
          <span>Health & Beauty</span>
          <div className="title-underline-health"></div>
        </div>
      </div>
      <div className="sellerAllCollectionNav-bottom">
        {sellerProduct.map((product) => {
          return <ProductDetail key={product._id} product={product} />;
        })}
      </div>
      <div className="pagginationContainer">
        <Pagination count={10} variant="outlined" />
      </div>
    </div>
  );
};

export default SellerHealthBeautyNav;
