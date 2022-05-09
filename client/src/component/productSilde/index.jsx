import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import ProductDetail from "../productDetail";
import { slideResponsive } from "../../component/data/slideResponsive";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { productData } from "../../component/data/productData";
import axios from "axios";
import { useIsMounted } from "../isMounted";
import UserContext from "../../provider/userProvider";

const items = [];
const ProductSlider = () => {
  const { state, USER } = useContext(UserContext);

  const [getproduct, setGetProduct] = useState([]);

  const isMounted = useIsMounted();

  async function getAllProducts() {
    try {
      const { data } = await axios.get("/api/auth/products");
      if (isMounted.current) {
        setGetProduct(data);
        USER.saveAllProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, [getproduct]);

  const handleDragStart = (e) => e.preventDefault();
  return (
    <AliceCarousel
      // mouseTracking
      // items={this.state.galleryItems}
      // responsive={this.responsive}
      autoPlayInterval={2000}
      autoPlayDirection="ltr"
      autoPlay={true}
      fadeOutAnimation={false}
      mouseTrackingEnabled={false}
      disableAutoPlayOnAction={true}
      items={getproduct.map((product) => {
        return (
          <ProductDetail
            key={product._id}
            product={product}
            sellerTag={true}
            onDragStart={handleDragStart}
          />
        );
      })}
      responsive={slideResponsive}
      controlsStrategy="alternate"
    />
  );
};

export default ProductSlider;
