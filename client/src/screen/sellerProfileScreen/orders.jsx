import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import skypurpleGraph from "../../assets/images/skypurpleGraph.jpg";
import ListOfOrders from "../../component/listOfOrders";
import ListOfOrderSlider from "../../component/listOfOrderSlide";
import OrdersStatus from "../../component/overviewCard/ordersStatus";

const SellerOrders = () => {
  return (
    <div className="sellerOrders">
      <div className="sellerOrdersFirst">
        <span>Orders</span>
      </div>
      <div className="sellerOrdersSecond">
        <div className="sellerOrdersSecondLeft">
          <div className="sellerOrdersSecondLeftImgContainer">
            <img src={skypurpleGraph} alt="" className="sellerOrderGraph" />
            <div className="sellerOrdersSecondLeftTextContainer">
              <span>Orders Overview</span>
              <select name="" id="" className="graphSelect">
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="WeekYearlyly">Yearly</option>
              </select>
            </div>
          </div>
        </div>

        <div className="sellerOrdersSecondRight">
          <OrdersStatus />
        </div>
      </div>
      <div className="sellerOrdersThird">
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
          <ListOfOrders orderType="Preparing" />
          <ListOfOrders orderType="Completed" />
          <ListOfOrders orderType="Delivering" />
          <ListOfOrders orderType="Canceeled" />
        </div>
      </div>
      {/* ======list of order mobile========== */}
      <div className="listOfOrdersMobileContainer">
        <div className="listOfOrdersMobileTopText">
          <h2>List of Orders</h2>
        </div>
        <ListOfOrderSlider />
      </div>
      <div className="sellerOrdersFouth">
        <div className="pagginationContainer">
          <Pagination count={10} variant="outlined" />
        </div>
      </div>
    </div>
  );
};

export default SellerOrders;
