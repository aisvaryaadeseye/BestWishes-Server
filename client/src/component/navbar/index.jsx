import React, { useContext, useState, useEffect } from "react";
import { NavbarStyled } from "./style";
import "./style.css";
import "font-awesome/css/font-awesome.min.css";
import bestWishLogo from "../../assets/images/bestWishesLogo.svg";
import UserContext from "../../provider/userProvider";

import { Link } from "react-router-dom";
import TopRightNav from "../topRightNav";

const Navbar = () => {
  const { state } = useContext(UserContext);

  return (
    <NavbarStyled
      className="navBar"
      style={{ height: state.isSeller && "80px" }}
    >
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
      {state.isSeller ? (
        <></>
      ) : (
        <div className="navbarBottom">
          <div className="navbarBottomnavBarLinks">
            <Link to="/productScreenClothing" className="navbarBottomLink">
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
      )}
    </NavbarStyled>
  );
};

export default Navbar;
