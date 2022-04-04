import React, { useState } from "react";
import AllProductsCard from "../../component/overviewCard/allProducts";
import ShopLikes from "../../component/overviewCard/shopeLike";
import ShopView from "../../component/overviewCard/shopView";
import TotalOrdersCard from "../../component/overviewCard/totalOdersCard";
import TotalProductsCard from "../../component/overviewCard/totalProductsCard";
import TotalSalesCard from "../../component/overviewCard/totalSalesCard";
import OverViewProductStock from "../../component/overViewProductStock/overViewProductStock";
import "./style.css";
import OrdersStatus from "../../component/overviewCard/ordersStatus";
import ListOfOrders from "../../component/listOfOrders";
import TotalIncomeCard from "../../component/overviewCard/totalIncomeCard";
import skypurpleGrap from "../../assets/images/skypurpleGrap.jpg";
import purpleGrapg from "../../assets/images/purpleGrapg.jpg";
import greenGraph from "../../assets/images/greenGraph.png";
import orangeGraph from "../../assets/images/orangeGraph.jpg";

const ProfileOverView = () => {
  const [orders, setOrders] = useState(true);
  const [sales, setSales] = useState(false);
  const [income, setIncome] = useState(false);
  const [ratings, setRatings] = useState(false);
  const handleOrders = () => {
    setOrders(true);
    setSales(false);
    setIncome(false);
    setRatings(false);
  };
  const handleSales = () => {
    setOrders(false);
    setSales(true);
    setIncome(false);
    setRatings(false);
  };
  const handleIncome = () => {
    setOrders(false);
    setSales(false);
    setIncome(true);
    setRatings(false);
  };
  const handleratings = () => {
    setOrders(false);
    setSales(false);
    setIncome(false);
    setRatings(true);
  };
  return (
    <div className="profileOverview">
      <div className="profileOverviewSection1">
        <h1>Overview</h1>
      </div>
      <div className="profileOverviewSection2">
        <div className="profileOverviewSec2Left">
          <div className="profileOverviewSection2Top">
            <TotalSalesCard />
            <TotalOrdersCard />
            <TotalIncomeCard />
          </div>
          <div className="profileOverviewSection2Bottom">
            <AllProductsCard />
            <ShopLikes />
            <ShopView />
          </div>
        </div>
        <div className="profileOverviewSec2Right">
          <TotalProductsCard />
          <OrdersStatus />
        </div>
      </div>
      <div className="overviewGraphContainer">
        <div className="overviewGraphContainerBottom">
          <div className="overviewGraphContainerTop">
            <div className="overviewGraphContainerTopLeft">
              <span>Orders Overview</span>
            </div>
            <div className="overviewGraphContainerTopMiddle">
              <div
                className="graphOrders"
                style={{ backgroundColor: orders && "#f4f4f4" }}
                onClick={handleOrders}
              >
                <i className="fa fa-circle faCircle" aria-hidden="true"></i>
                <span>Orders</span>
              </div>
              <div
                className=" graphSales"
                style={{ backgroundColor: sales && "#f4f4f4" }}
                onClick={handleSales}
              >
                <i className="fa fa-circle faCircle" aria-hidden="true"></i>
                <span>Sales</span>
              </div>
              <div
                className=" graphIncome"
                style={{ backgroundColor: income && "#f4f4f4" }}
                onClick={handleIncome}
              >
                <i className="fa fa-circle faCircle" aria-hidden="true"></i>
                <span>income</span>
              </div>
              <div
                className=" grapRatings"
                style={{ backgroundColor: ratings && "#f4f4f4" }}
                onClick={handleratings}
              >
                <i className="fa fa-circle faCircle" aria-hidden="true"></i>
                <span>Ratings</span>
              </div>
            </div>
            <div className="overviewGraphContainerTopRight">
              <select name="" id="" className="graphSelect">
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="WeekYearlyly">Yearly</option>
              </select>
            </div>
          </div>
          <img
            src={
              orders
                ? skypurpleGrap
                : sales
                ? purpleGrapg
                : income
                ? greenGraph
                : orangeGraph
            }
            alt=""
            className="overviewGraphImg"
          />
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
        <ListOfOrders orderType="Preparing" />
        <ListOfOrders orderType="Completed" />
        <ListOfOrders orderType="Delivering" />
        <ListOfOrders orderType="Canceeled" />
      </div>
      <div className="profileOverviewSection3">
        <div className="productOverviewSec3One">
          <h1>Stock Report</h1>
        </div>
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
      </div>
    </div>
  );
};

export default ProfileOverView;
