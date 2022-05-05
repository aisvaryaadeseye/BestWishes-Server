import React from "react";
import SellerProductDetail from "../selllerProductDetail";
import Pagination from "@material-ui/lab/Pagination";

import "./style.css";
const AllCollections = ({ getSellerPro }) => {
  return (
    <div className="allCollections">
      <div className="allCollectionsTop">
        {getSellerPro &&
          getSellerPro.map((product) => {
            return <SellerProductDetail product={product} />;
          })}
      </div>
      <div className="allCollectionsBottom">
        <div className="pagginationContainer">
          <Pagination count={10} variant="outlined" />
        </div>
      </div>
    </div>
  );
};

export default AllCollections;
