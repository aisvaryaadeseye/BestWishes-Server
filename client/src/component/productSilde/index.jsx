import React, { useState, useEffect } from "react";
import "./style.css";
import ProductDetail from "../productDetail";
import { slideResponsive } from "../../component/data/slideResponsive";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { productData } from "../../component/data/productData";
import axios from "axios";

const items = [];
const ProductSlider = () => {
  const [getproduct, setGetProduct] = useState([]);

  async function getAllProducts() {
    try {
      const { data } = await axios.get("/api/auth/products");
      // console.log({ getproduct: data });
      setGetProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, [getproduct]);
  return (
    <AliceCarousel
      mouseTracking
      items={getproduct.map((product) => {
        return (
          <ProductDetail key={product._id} product={product} sellerTag={true} />
        );
      })}
      responsive={slideResponsive}
      controlsStrategy="alternate"
    />
  );
};

export default ProductSlider;
