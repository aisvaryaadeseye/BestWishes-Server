import React, { useContext, useState, useEffect } from "react";
import { NavbarStyled } from "./style";
import "./style.css";
import "font-awesome/css/font-awesome.min.css";
import bestWishLogo from "../../assets/images/bestWishesLogo.svg";
import UserContext from "../../provider/userProvider";

import { Link } from "react-router-dom";
import TopRightNav from "../topRightNav";

const SellerNavbar = () => {
  const { state } = useContext(UserContext);

  return (
    <div className="navBar sellerNavBar">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerNavbar;
