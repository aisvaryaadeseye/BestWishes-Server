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
import OrdersStatus from "../../component/overviewCard/ordersStatus";

const ProfileOverView = () => {
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
          <OrdersStatus />
        </div>
      </div>
      <div className="profileOverviewSection3 listOfOrderContainer">
        <div className="orderTitle ">
          <div className="orderTitleLeft">
            <h1>List of Orders</h1>
          </div>
          <div className="orderTitleList">
            <span>All</span>
            <span>Request</span>
            <span>Preparing</span>
            <span>Delivery</span>
            <span>Completed</span>
            <span>Cancelled</span>
          </div>
        </div>
        <div className="productOverviewSec3Two">
          <span>Order ID</span>
          <span>Customer</span>
          <span>Product</span>
          <span>Qty</span>
          <span>
            Delivery <br />
            Location
          </span>
          <span>
            Delivery <br />
            Status
          </span>
        </div>
        <OverViewProductStock stockType="In Stock" />
        <OverViewProductStock stockType="Out Stock" colorType="red" />
        <OverViewProductStock stockType="Low Stock" colorType="grey" />
      </div>
      <div className="profileOverviewSection3">
        <div className="productOverviewSec3One">
          <h1>Stock Report</h1>
        </div>
        <div className="productOverviewSec3Two">
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
      </div>
      <div className="profileOverviewSection4">
        <div className="profileOverviewSection4Right">right</div>
      </div>
    </div>
  );
};

export default ProfileOverView;
