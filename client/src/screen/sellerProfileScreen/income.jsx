import React, { useState } from "react";
import incomeGraph from "../../assets/images/incomeGraph.png";
import Pagination from "@material-ui/lab/Pagination";
import TotalIncomeCard from "../../component/overviewCard/totalIncomeCard";
import { Link, Outlet } from "react-router-dom";
var navLinks = [
  { link: "all-income", text: "All" },
  { link: "clothing-accessories", text: "Clothing Accessories" },
  { link: "health-beauty", text: "Health & Beauty" },
  { link: "pottery", text: "Pottery" },
  { link: "art-craft", text: "Art & Craft" },
  { link: "other-categories", text: "Other Categories" },
];

const SellerIncome = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  return (
    <div className="sellerIncome">
      <div className="sellerIncomeTop">
        <span>Income</span>
      </div>
      <div className="sellerIncomeMiddle">
        <div className="sellerIncomeMiddleLeft">
          <div className="salesOverviewImaContainer">
            <img src={incomeGraph} alt="" className="salesImgGraph" />
            <div className="incomeGraphText">
              <span>Income Overview</span>
              <select name="" id="" className="graphSelect">
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="WeekYearlyly">Yearly</option>
              </select>
            </div>
          </div>
        </div>
        <div className="sellerIncomeMiddleRight">
          <TotalIncomeCard />
        </div>
      </div>
      <div className="sellerIncomeBottom">
        <div className="sellerIncomeBottom-top">
          <span>Income</span>
          <nav className="seller-income-nav-links">
            {navLinks.map((x, i) => {
              return (
                <Link key={i} to={x.link}>
                  <div
                    onClick={() => setSelectedLink(x)}
                    className="seller-income-nav"
                    style={{
                      color: selectedLink?.link === x.link && "#f69014",
                    }}
                  >
                    {x.text}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="sellerIncomeBottom-bottom">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SellerIncome;
