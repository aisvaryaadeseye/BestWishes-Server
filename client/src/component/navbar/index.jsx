import React, { useContext, useEffect } from "react";
import { NavbarStyled } from "./style";
import "./style.css";
import "font-awesome/css/font-awesome.min.css";
import bestWishLogo from "../../assets/images/bestWishesLogo.svg";
import UserContext from "../../provider/userProvider";

import { Link } from "react-router-dom";
import TopRightNav from "../topRightNav";

const Navbar = () => {
  const { state } = useContext(UserContext);

  useEffect(() => {
    // console.log({ switchUser: state.switchUser });
  }, [state]);
  return (
    <NavbarStyled
      className="navBar"
      style={{ height: !state.switchUser && "80px" }}
    >
      <div className="navbarTop">
        <Link to={!state.switchUser ? "/sellerprofilescreen/overview" : "/"}>
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
      {state.switchUser ? (
        <div className="navbarBottom">
          <div className="navbarBottomnavBarLinks">
            <Link to="/product-screen-clothing" className="navbarBottomLink">
              Clothings & Accessories
            </Link>

            <Link to="/product-screen-health" className="navbarBottomLink">
              Health & Beauty
            </Link>

            <Link to="/product-screen-art" className="navbarBottomLink">
              Art & Craft
            </Link>

            <Link to="/product-screen-pottery" className="navbarBottomLink">
              Pottery
            </Link>

            <Link to="/product-screen-others" className="navbarBottomLink">
              Other Categories
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </NavbarStyled>
  );
};

export default Navbar;
