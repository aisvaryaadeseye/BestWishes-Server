import React from "react";
import SellerProductDetail from "../selllerProductDetail";
import Pagination from "@material-ui/lab/Pagination";

import "./style.css";
const Pottery = () => {
  return (
    <div className="allCollections">
      <div className="allCollectionsTop">
        <SellerProductDetail />
        <SellerProductDetail />
        <SellerProductDetail />
        <SellerProductDetail />
        <SellerProductDetail />
        <SellerProductDetail />
        <SellerProductDetail />
        <SellerProductDetail />
        <SellerProductDetail />
        <SellerProductDetail />
        <SellerProductDetail />
        <SellerProductDetail />
        <SellerProductDetail />
      </div>
      <div className="allCollectionsBottom">
        <div className="pagginationContainer">
          <Pagination count={10} variant="outlined" />
        </div>
      </div>
    </div>
  );
};

export default Pottery;;


