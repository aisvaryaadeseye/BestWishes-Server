import React, { useState } from "react";
import AllProductsCard from "../../component/overviewCard/allProducts";
import ShopLikes from "../../component/overviewCard/shopeLike";
import ShopView from "../../component/overviewCard/shopView";
import TotalIcomeCard from "../../component/overviewCard/totalIcomeCard";
import TotalOrdersCard from "../../component/overviewCard/totalOdersCard";
import TotalProductsCard from "../../component/overviewCard/totalProductsCard";
import TotalSalesCard from "../../component/overviewCard/totalSalesCard";
import OverViewProductStock from "../../component/overViewProductStock/overViewProductStock";
import "./style.css";
import orderStatusImg from "../../assets/images/orserStatusImg.png";

const ShowOrderStatus = (title, percentage, color) => {
  return (
    <div className="statusDetails">
      <div className="statusBox" style={{ backgroundColor: color }}></div>
      <h3>{title}</h3>
      <h4 style={{ color: color }}>{percentage}%</h4>
    </div>
  );
};
const ProfileOverView = ({ title, percentage, color }) => {
  return (
    <div className="profileOverview">
      <div className="profileOverviewSection1">
        <h1>Overview</h1>
      </div>
      <div className="profileOverviewSection2">
        <div className="profileOverviewSection2Top">
          <TotalSalesCard />
          <TotalOrdersCard />
          <TotalIcomeCard />
          <TotalProductsCard />
        </div>
        <div className="profileOverviewSection2Bottom">
          <AllProductsCard />
          <ShopLikes />
          <ShopView />
        </div>
      </div>
      <div className="profileOverviewSection3">
        <div className="productOverviewSec3One">
          <h1>Stock Report</h1>
        </div>
        <div className="productOverviewSec3Two">
          <p>Product</p>
          <p>Products Id</p>
          <p>Price</p>
          <p>Date added</p>
          <p>Stock status</p>
          <p>Quantity</p>
        </div>
        <OverViewProductStock stockType="In Stock" />
        <OverViewProductStock stockType="Out Stock" colorType="red" />
        <OverViewProductStock stockType="Low Stock" colorType="grey" />
      </div>
      <div className="profileOverviewSection4">
        <div className="profileOverviewSection4Left">
          <div className="orderStatusTop">
            <h1>Oders Status</h1>
          </div>
          <div className="orderStatusBottom">
            <img src={orderStatusImg} alt="" className="orderstatusImg" />
            <div className="statusDetailContainer">
              {ShowOrderStatus(
                (title = "Completed"),
                (percentage = "55")
                // (color = "0392e2")
              )}
              {ShowOrderStatus(
                (title = "Delivering"),
                (percentage = "25"),
                (color = "#0392e2")
              )}
              {ShowOrderStatus(
                (title = "Preparing"),
                (percentage = "15"),
                (color = "#FFD32D")
              )}
              {ShowOrderStatus(
                (title = "Cancel"),
                (percentage = "5"),
                (color = "red")
              )}
            </div>
          </div>
        </div>
        <div className="profileOverviewSection4Right">right</div>
      </div>
    </div>
  );
};

export default ProfileOverView;
