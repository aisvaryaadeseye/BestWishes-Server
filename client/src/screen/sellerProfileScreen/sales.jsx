import React from "react";
import purpleGraph from "../../assets/images/purpleGraph.jpg";
import RecentCustomer from "../../component/recentCustomer";
import RecentSales from "../../component/recentSales";
import Pagination from "@material-ui/lab/Pagination";
import TopSellingSlider from "../../component/topSellingSlide";
import RecentSalesMobileSlider from "../../component/recentSalesMobileSlider";

const SellerSales = () => {
  return (
    <div className="sales">
      <div className="salesHead">
        <span>Sales</span>
      </div>
      <div className="salesOverview">
        <div className="salesOverviewLeft">
          <div className="salesOverviewImaContainer">
            <img src={purpleGraph} alt="" className="salesImgGraph" />
            <div className="salesOverviewTextSelect">
              <span>Sales Overview</span>
              <select name="" id="" className="graphSelect">
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="WeekYearlyly">Yearly</option>
              </select>
            </div>
          </div>
        </div>
        <div className="salesOverviewRight">
          <div className="recentCustomerContainer">
            <span>Recent Customer</span>
            <RecentCustomer />
            <RecentCustomer />
            <RecentCustomer />
            <RecentCustomer />
            <RecentCustomer />
            <RecentCustomer />
            <RecentCustomer />
          </div>
        </div>
      </div>
      <div className="salesTopSelling">
        <div className="salesTopSelling-top">
          <span>Top Selling Products</span>
        </div>
        <div className="salesTopSelling-bottom">
          <TopSellingSlider />
        </div>
      </div>
      <div className="salesRecentSales">
        <div className="salesRecentSales-top">
          <span>Recent Sales</span>
        </div>
        <div className="salesRecentSales-bottom">
          <div className="salesRecentSales-bottom-top">
            <span>Product</span>
            <span>Customer</span>
            <span>Location</span>
            <span>Quantity</span>
            <span>Date</span>
          </div>
          <RecentSales />
          <RecentSales />
          <RecentSales />
          <RecentSales />
          <RecentSales />
          <RecentSales />
          <RecentSales />
          <RecentSales />
        </div>
        <div className="pagginationContainer">
          <Pagination count={10} variant="outlined" />
        </div>
      </div>
      <div className="recentSalesMobile">
        <div className="recentSalesMobileText">
          <span>Recent Sales</span>
        </div>
        <RecentSalesMobileSlider />
      </div>
    </div>
  );
};

export default SellerSales;
