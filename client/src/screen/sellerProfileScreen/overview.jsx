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
import skypurpleGraph from "../../assets/images/skypurpleGraph.jpg";
import purpleGraph from "../../assets/images/purpleGraph.jpg";
import incomeGraph from "../../assets/images/incomeGraph.png";
import reviewGraph from "../../assets/images/reviewGraph.jpg";
import ListOfOrderSlider from "../../component/listOfOrderSlide";
import StockReportSlide from "../../component/stockReportSlide";
import { Link, useNavigate } from "react-router-dom";
const ProfileOverView = ({ getOrders }) => {
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
        <span>Overview</span>
      </div>
      <div className="profileOverviewSection2">
        <div className="profileOverviewSec2Left">
          <TotalSalesCard />
          <TotalOrdersCard />
          <TotalIncomeCard />
          <TotalProductsCard />
          <AllProductsCard />
          <ShopLikes />
          <ShopView />
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
                ? skypurpleGraph
                : sales
                ? purpleGraph
                : income
                ? incomeGraph
                : reviewGraph
            }
            alt=""
            className="overviewGraphImg"
          />
        </div>
      </div>
      <div className="profileOverviewSection3 listOfOrderContainer">
        <Link to="/sellerprofilescreen/seller-orders" className="orderTitle ">
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
        </Link>
        <div className="productOverviewSec3Two">
          <span>Order ID</span>
          <span>Customer</span>
          <span>Product</span>
          <span>Quantity</span>
          <span>
            Delivery <br />
            Location
          </span>
          <span>
            Delivery <br />
            Status
          </span>
        </div>

        {getOrders &&
          getOrders.map((order) => {
            return (
              <ListOfOrders
                key={order._id}
                orderType="Preparing"
                order={order}
                showProductImg={true}
              />
            );
          })}

        {/* <ListOfOrders orderType="Preparing" showProductImg={true} />
        <ListOfOrders orderType="Completed" showProductImg={true} />
        <ListOfOrders orderType="Delivering" showProductImg={true} />
        <ListOfOrders orderType="Canceeled" showProductImg={true} /> */}
      </div>
      {/* ======list of order mobile========== */}
      <div className="listOfOrdersMobileContainer">
        <Link
          to="/sellerprofilescreen/seller-orders"
          className="listOfOrdersMobileTopText"
        >
          <h2>List of Orders</h2>
        </Link>

        <ListOfOrderSlider getOrders={getOrders} />
      </div>
      {/* ======list of order mobile=====XXXxx===== */}

      {/* ==========stock report========== */}
      <div className="profileOverviewSection3">
        <Link
          to="/sellerprofilescreen/stockreports"
          className="productOverviewSec3One"
        >
          <h1>Stock Report</h1>
        </Link>
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
      {/* ==========stock report=====XXx===== */}

      {/* ============Stock report mobile===== */}
      <div className="stockReportMobileContainer">
        <div className="stockReportMobileTop">
          <Link to="/sellerprofilescreen/stockreports">
            <h2>Stock Report</h2>
          </Link>
        </div>
        <div className="stockReportMobileBottom">
          <StockReportSlide />
        </div>
      </div>
      {/* ========XXXXXXX====Stock report mobile===== */}
    </div>
  );
};

export default ProfileOverView;
