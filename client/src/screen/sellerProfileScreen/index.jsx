import React, { useContext } from "react";
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

const SellerProfileScreen = () => {
  const { state, USER } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSeller = () => {
    USER.updateisSeller(false);
    if (state.isSeller) {
      navigate("/customerProfileScreen/editCustomerProfile");
    }
  };

  return (
    <div className="profileScreen">
      <div className="profileSideBar">
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
          <Link to="overview">
            <div className="sidebarNav">
              <img src={overviewIcon} alt="" className="iconImg" />
              Overview
            </div>
          </Link>
          <Link to="stockreports">
            <div className="sidebarNav">
              <img src={stock} alt="" className="iconImg" />
              Stock Reports
            </div>
          </Link>
          <Link to="sellerproduct/all-collections">
            <div className="sidebarNav">
              <img src={products} alt="" className="iconImg" />
              Products
            </div>
          </Link>
          <Link to="editprofile">
            <div className="sidebarNav">
              <img src={edit} alt="" className="iconImg" />
              Edit Profile
            </div>
          </Link>
          <Link to="editprofile">
            <div className="sidebarNav">
              <img src={message} alt="" className="iconImg" />
              Messages <div className="messageCount">3</div>
            </div>
          </Link>
          <Link to="editprofile">
            <div className="sidebarNav">
              <img src={orders} alt="" className="iconImg" />
              Orders<div className="messageCount">10</div>
            </div>
          </Link>
          <Link to="editprofile">
            <div className="sidebarNav">
              <img src={sales} alt="" className="iconImg" />
              Sales
            </div>
          </Link>
          <Link to="editprofile">
            <div className="sidebarNav">
              <img src={income} alt="" className="iconImg" />
              Income
            </div>
          </Link>
          <Link to="editprofile">
            <div className="sidebarNav">
              <img src={review} alt="" className="iconImg" />
              Review
            </div>
          </Link>
          <Link to="editprofile">
            <div className="sidebarNav">
              <img src={card} alt="" className="iconImg" />
              Payment
            </div>
          </Link>
          <Link to="editprofile">
            <div className="sidebarNav">
              <img src={need} alt="" className="iconImg" />
              Need Assisstance ?
            </div>
          </Link>
          <Link to="editprofile">
            <div className="sidebarNav">
              <img src={setting} alt="" className="iconImg" />
              Account Settings
            </div>
          </Link>
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
      <div className="profileFeeds">
        <Outlet />
      </div>
    </div>
  );
};

export default SellerProfileScreen;
