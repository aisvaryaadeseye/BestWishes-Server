import React from "react";
import TotalProductsCard from "../../component/overviewCard/totalProductsCard";
import OverViewProductStock from "../../component/overViewProductStock/overViewProductStock";
import { Link, useNavigate } from "react-router-dom";
import StockReportMobile from "../../component/stockReportMobile";
import StockReportSlide from "../../component/stockReportSlide";

const StockReports = () => {
  let naviagte = useNavigate();
  var navLinks = [
    {
      link: "/sellerprofilescreen/sellerproduct/all-collections",
      text: "All Collections",
    },
    {
      link: "/sellerprofilescreen/sellerproduct/clothings-accessories",
      text: "All Collections",
      text: "Clothings & Accessories",
    },
    {
      link: "/sellerprofilescreen/sellerproduct/health-beauty",
      text: "Health & Beauty",
    },
    { link: "/sellerprofilescreen/sellerproduct/pottery", text: "Pottery" },
    {
      link: "/sellerprofilescreen/sellerproduct/art-craft",
      text: "Art & Craft",
    },
    {
      link: "/sellerprofilescreen/sellerproduct/other-categories",
      text: "Other Categories",
    },
  ];
  return (
    <div className="stockReport">
      <div className="stockReportTop">
        <div className="stockReportTopA">
          <span>Stock Reports</span>
          <div className="stockReportCard">
            <TotalProductsCard />
          </div>
        </div>
        <nav className="stockReportTopB">
          {navLinks.map((x, i) => {
            return (
              <div key={i} onClick={() => naviagte(`${x.link}`)}>
                <div className="stockReportTextB">{x.text}</div>
              </div>
            );
          })}
        </nav>

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
              <i
                className="fa fa-search stockSearchIcon"
                aria-hidden="true"
              ></i>
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
        <div className="stockSearchContainerBottom ">
          <i className="fa fa-search stockSearchIcon" aria-hidden="true"></i>
          <input type="text" placeholder="Search" />
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
      {/* ============Stock report mobile===== */}
      <div className="stockReportMobileContainer">
        <div className="stockReportMobileTop">
          <div>
            <h2>Stock Report</h2>
          </div>
        </div>
        <div className="stockReportMobileBottom">
          <StockReportSlide />
        </div>
      </div>
      {/* ========XXXXXXX====Stock report mobile===== */}
    </div>
  );
};

export default StockReports;
