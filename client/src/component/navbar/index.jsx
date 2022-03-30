import React, { useContext, useState, useEffect } from "react";
import { NavbarStyled } from "./style";
import "./style.css";
import "font-awesome/css/font-awesome.min.css";
import bestWishLogo from "../../assets/images/bestWishesLogo.svg";
import UserContext from "../../provider/userProvider";
import customerImg from "../../assets/images/customerImg.jpg";

import { Link } from "react-router-dom";
import TopRightNav from "../topRightNav";

import profileIIMG from "../../assets/images/profileIIMG.png";

const Navbar = () => {
  const { state } = useContext(UserContext);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setToken(localStorage.getItem("authToken"));
    }
  });

  return (
    <NavbarStyled className="navBar">
      <div className="navbarTop">
        <Link to="/">
          <img src={bestWishLogo} className="bestWishLogo" />
        </Link>
        <div className="sarchbarContainer">
          <div className="searchContainer">
            <i className="fa fa-search"></i>

            <input type="text" placeholder="Serach" />
          </div>
          <div className="searchBtn">
            <button>Search</button>
          </div>
        </div>

        <div className="navBarLinkLists">
          <div className="accountContainer">
            <TopRightNav user={state.token} />
            {state.token ? (
              <Link to="/customerProfileScreen/editCustomerProfile">
                <div className="userImgContainer">
                  <img src={customerImg} className="userImg" alt="" />
                </div>
              </Link>
            ) : (
              <div className="userImgContainer">
                <img src={profileIIMG} className="userImg" alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="navbarBottom">
        <div className="navbarBottomnavBarLinks">
          <Link to="/productScreenChange" className="navbarBottomLink">
            Clothings & Accessories
          </Link>

          <Link to="/productScreenHealth" className="navbarBottomLink">
            Health & Beauty
          </Link>

          <Link to="/productScreenHealth" className="navbarBottomLink">
            Art & Craft
          </Link>

          <Link to="/productScreenHealth" className="navbarBottomLink">
            Pottery
          </Link>

          <Link to="/productScreenHealth" className="navbarBottomLink">
            Other Categories
          </Link>
        </div>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
