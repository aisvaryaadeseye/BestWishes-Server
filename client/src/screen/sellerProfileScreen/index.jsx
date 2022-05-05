import React, { useContext, useState } from "react";
import "./style.css";
import customerImg from "../../assets/images/customerImg.jpg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import sales from "../../assets/icons/sales.svg";
import review from "../../assets/icons/review.svg";
import overviewIcon from "../../assets/icons/overviewIcon.svg";
import edit from "../../assets/icons/edit.svg";
import stock from "../../assets/icons/stock.svg";
import logout from "../../assets/icons/logout.svg";
import message from "../../assets/icons/message.png";
import products from "../../assets/icons/products.svg";
import orders from "../../assets/icons/order.png";
import need from "../../assets/icons/need.svg";
import setting from "../../assets/icons/setting.svg";
import card from "../../assets/icons/card.svg";
import income from "../../assets/icons/income.svg";
import UserContext from "../../provider/userProvider";
import LogOut from "../../component/logOut";

var navLinks = [
  { img: overviewIcon, link: "overview", text: "Overview" },
  { img: stock, link: "stockreports", text: "Stock Reports" },
  { img: products, link: "sellerproduct/all-collections", text: " Products" },
  { img: edit, link: "editprofile", text: " Edit Profile" },
  {
    img: message,
    link: "seller-message/seller-message-inbox",
    text: "Messages",
  },
  { img: orders, link: "seller-orders", text: "Orders" },
  { img: sales, link: "seller-sales", text: "Sales" },
  { img: income, link: "seller-income/all-income", text: "Income" },
  { img: review, link: "seller-review", text: "Review" },
  { img: card, link: "overview", text: "Payment" },
  { img: need, link: "overview", text: "Need Assisstance ?" },
  { img: setting, link: "overview", text: "Account Settings" },
];

const SellerProfileScreen = ({ getOrders }) => {
  const { state, USER } = useContext(UserContext);
  const navigate = useNavigate();
  const DrawerClass = ["profileSideBar"];
  const [sideToggle, setSideToggle] = useState(true);
  const [selectedLink, setSelectedLink] = useState(null);

  if (sideToggle) {
    DrawerClass.push("show");
  }

  const handleSideBar = () => {
    setSideToggle(!sideToggle);
  };
  const handleSide = () => {
    if (!sideToggle) {
      setSideToggle(true);
    }
  };

  const handleSeller = () => {
    USER.updateSwitchUser(true);
    navigate("/");
  };

  return (
    <div className="profileScreen" onClick={handleSide}>
      <div className="sidebarMenu">
        <span onClick={handleSideBar}>
          Menu <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </span>
      </div>
      {/* ====== */}
      <div className={DrawerClass.join(" ")}>
        <div className="profileSideBarTop">
          <div className="profileImgContainer">
            <img src={customerImg} alt="" className="profileImg" />
          </div>
          <h1>Chesterfiled Store</h1>
          <h2>Helsinki, Finland</h2>
          <h3>
            4.5 ratings <i className="fa fa-star" aria-hidden="true"></i>
          </h3>
        </div>
        {/* ============ */}
        <nav className="profileSideBarBottomSlide">
          {navLinks.map((x, i) => {
            return (
              <Link key={i} to={x.link}>
                <div className="sidebarNav">
                  <img src={x.img} alt="" className="iconImg" />
                  {x.text}{" "}
                  {x.text === "Messages" && (
                    <div className="messageCount">3</div>
                  )}
                  {x.text === "Orders" && (
                    <div className="messageCount">10</div>
                  )}
                </div>
              </Link>
            );
          })}

          <div className="sidebarNav" onClick={handleSeller}>
            <img src={setting} alt="" className="iconImg" />
            Switch to Buyer
          </div>

          <div className="sidebarNav" onClick={LogOut}>
            <img src={logout} alt="" className="iconImg" />
            Log-out
          </div>
        </nav>
      </div>
      {/* ========== */}
      <div className="profileSideBarMenu">
        <div className="profileSideBarTop">
          <div className="profileImgContainer">
            <img src={customerImg} alt="" className="profileImg" />
          </div>
          <h1>Chesterfiled Store</h1>
          <h2>Helsinki, Finland</h2>
          <h3>
            4.5 ratings <i className="fa fa-star" aria-hidden="true"></i>
          </h3>
        </div>
        {/* ============ */}
        <nav className="profileSideBarBottom">
          {navLinks.map((x, i) => {
            return (
              <Link key={i} to={x.link}>
                <div
                  className="sideBarNavBar"
                  style={{
                    backgroundColor: selectedLink?.text === x.text && "#fef5ed",
                  }}
                  onClick={() => setSelectedLink(x)}
                >
                  <img src={x.img} alt="" className="iconImg" />
                  {x.text}{" "}
                  {x.text === "Messages" && (
                    <div className="messageCount">3</div>
                  )}
                  {x.text === "Orders" && (
                    <div className="messageCount">{getOrders?.length}</div>
                  )}
                </div>
              </Link>
            );
          })}

          <div className="sideBarNavBar" onClick={handleSeller}>
            <img src={setting} alt="" className="iconImg" />
            Switch to Buyer
          </div>

          <div className="sideBarNavBar" onClick={LogOut}>
            <img src={logout} alt="" className="iconImg" />
            Log-out
          </div>
        </nav>
      </div>
      <div className="profileFeeds">
        <Outlet />
      </div>
    </div>
  );
};

export default SellerProfileScreen;
