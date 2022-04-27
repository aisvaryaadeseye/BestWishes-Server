import React, { useState, useContext } from "react";
import "./style.css";
import bestWishLogo from "../../assets/images/bestWishesLogo.svg";
import { Link } from "react-router-dom";
import UserContext from "../../provider/userProvider";

const MobileNav = ({ click }) => {
  const { state } = useContext(UserContext);

  return (
    <div className="mobileNav">
      <div className="mobileNavTop">
        <Link to={state.switchUser ? "/" : "/sellerprofilescreen/overview"}>
          <img src={bestWishLogo} className="bestWishLogo" />
        </Link>
        <div className="hamburgerContainer" onClick={click}>
          <div className="">
            <i className="fa fa-bars leftBar" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
