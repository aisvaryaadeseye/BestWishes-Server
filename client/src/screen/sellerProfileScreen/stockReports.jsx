import React from "react";
import TotalProductsCard from "../../component/overviewCard/totalProductsCard";
import OverViewProductStock from "../../component/overViewProductStock/overViewProductStock";

const StockReports = () => {
  return (
    <div className="stockReport">
      <div className="stockReportTop">
        <div className="stockReportTopA">
          <span>Stock Reports</span>
          <TotalProductsCard />
        </div>
        <div className="stockReportTopB">
          <div className="stockReportText">
            <span>All Collections</span>
          </div>
          <div className="stockReportTextB">
            <span>Clothings & Accessories</span>
          </div>
          <div className="stockReportTextB">
            <span>Health & Beauty</span>
          </div>
          <div className="stockReportTextB">
            <span>Pottery</span>
          </div>
          <div className="stockReportTextB">
            <span>Art & Craft</span>
          </div>
          <div className="stockReportTextB">
            <span>Other Categories</span>
          </div>
        </div>
        <div className="stockReportTopC">
          <div className="stockReportTopCLeft">
            <div className="stockReportLeftText stockReportLeftTextA">
              <span>All</span>
            </div>
            <div className="stockReportLeftText">
              <span>In Stock</span>
            </div>
            <div className="stockReportLeftText">
              <span>Low Stock</span>
            </div>
            <div className="stockReportLeftText">
              <span>Out Stock</span>
            </div>
          </div>
          <div className="stockReportTopCRight">
            <div className="stockSearchContainer">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="stockReportBottom">
        <div className="productOverviewSec3Three">
          <span>Image</span>
          <span>Category</span>
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Stock Status</span>
        </div>
        <OverViewProductStock stockType="In Stock" />
        <OverViewProductStock stockType="Out Stock" colorType="red" />
        <OverViewProductStock stockType="Low Stock" colorType="grey" />
        <OverViewProductStock stockType="In Stock" />
        <OverViewProductStock stockType="Out Stock" colorType="red" />
        <OverViewProductStock stockType="Low Stock" colorType="grey" />
      </div>
    </div>
  );
};

export default StockReports;
