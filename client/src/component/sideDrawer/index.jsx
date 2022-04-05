import React, { useState, useContext } from "react";

import "./style.css";
import { Link } from "react-router-dom";
import UserContext from "../../provider/userProvider";
import { Button, Modal } from "react-bootstrap";
import LogOut from "../logOut";
import bestWishLogo from "../../assets/images/bestWishesLogo.svg";

const SideDrawer = ({ show, click }) => {
  const { state } = useContext(UserContext);
  const [showBar, setShowBar] = useState(false);
  const sideDrawerClass = ["sidedrawer"];
  const [showLeftBar, setShowBarLeftBar] = useState(false);
  const [showAccountList, setShowBarAccountList] = useState(false);
  const handleClose = () => setShowBar(false);
  const handleShow = () => setShowBar(true);
  const handleLeftBar = () => {
    setShowBarLeftBar(!showLeftBar);
    setShowBarAccountList(false);
  };
  const handleAccountHover = () => {
    setShowBarAccountList(true);
  };
  const handleAccountOut = () => {
    setShowBarAccountList(false);
  };
  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <>
      {state.isSeller ? (
        <div className={sideDrawerClass.join(" ")}>
          <div className="navIconImg">
            <Link to="/sellerprofilescreen/overview">
              <img src={bestWishLogo} className="bestWishLogo" />
            </Link>
          </div>
          <div className="hamburgerContainer sideDrawerMenu" onClick={click}>
            <div className="">
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
          </div>
          <div
            onClick={click}
            className="mobileNavBottomLeft"
            style={{ display: "flex" }}
          >
            <div className="mobileNavLeftList">
              <Link
                to="/blog-screen"
                className="mobileNavLink"
                onClick={handleLeftBar}
              >
                Blog
              </Link>
              <Link
                to="/blogScreen"
                className="mobileNavLink"
                onClick={handleLeftBar}
              >
                Help
              </Link>

              {state.token ? (
                <div
                  className="mobileAcct mobileNavLink "
                  onClick={handleLeftBar}
                  onMouseEnter={handleAccountHover}
                  onMouseLeave={handleAccountOut}
                >
                  <span>
                    Account{" "}
                    <i className="fa-solid fa-chevron-right fafaRight"></i>
                  </span>
                  <div
                    className="accountItems"
                    style={{ display: showAccountList ? "flex" : "none" }}
                  >
                    <Link
                      className="accountLinkNav"
                      to="/sellerprofilescreen/overview"
                      onClick={handleLeftBar}
                    >
                      View Profile
                    </Link>
                    <div onClick={handleShow}>Log Out</div>
                  </div>
                  <Modal
                    show={showBar}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to log out ?</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        style={{ backgroundColor: "#f69014", border: "none" }}
                        onClick={LogOut}
                      >
                        Yes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              ) : (
                <div
                  className="mobileAcct mobileNavLink "
                  onClick={handleLeftBar}
                  onMouseEnter={handleAccountHover}
                  onMouseLeave={handleAccountOut}
                >
                  <span>
                    Account{" "}
                    <i className="fa-solid fa-chevron-right fafaRight"></i>
                  </span>
                  <div
                    className="accountItems"
                    style={{ display: showAccountList ? "flex" : "none" }}
                  >
                    <Link
                      className="accountLinkNav"
                      to="/loginScreen"
                      onClick={handleLeftBar}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/registerScreen/customerRegisterAccount"
                      onClick={handleLeftBar}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={sideDrawerClass.join(" ")}>
          <div className="navIconImg">
            <Link to="/">
              <img src={bestWishLogo} className="bestWishLogo" />
            </Link>
          </div>
          <div className="hamburgerContainer sideDrawerMenu" onClick={click}>
            <div className="">
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
          </div>
          <div
            onClick={click}
            className="mobileNavBottomLeft"
            style={{ display: "flex" }}
          >
            <div className="mobileNavLeftList">
              <Link
                to="/product-screen-clothing"
                className="mobileNavLink"
                onClick={handleLeftBar}
              >
                Product
              </Link>
              <Link
                to="/blog-screen"
                className="mobileNavLink"
                onClick={handleLeftBar}
              >
                Blog
              </Link>
              <Link
                to="/blogScreen"
                className="mobileNavLink"
                onClick={handleLeftBar}
              >
                Help
              </Link>

              {state.token ? (
                <div
                  className="mobileAcct mobileNavLink "
                  onClick={handleLeftBar}
                  onMouseEnter={handleAccountHover}
                  onMouseLeave={handleAccountOut}
                >
                  <span>
                    Account{" "}
                    <i className="fa-solid fa-chevron-right fafaRight"></i>
                  </span>
                  <div
                    className="accountItems"
                    style={{ display: showAccountList ? "flex" : "none" }}
                  >
                    <Link
                      className="accountLinkNav"
                      to="/customerProfileScreen/editCustomerProfile"
                      onClick={handleLeftBar}
                    >
                      View Profile
                    </Link>
                    <div onClick={handleShow}>Log Out</div>
                  </div>
                  <Modal
                    show={showBar}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to log out ?</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        style={{ backgroundColor: "#f69014", border: "none" }}
                        onClick={LogOut}
                      >
                        Yes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              ) : (
                <div
                  className="mobileAcct mobileNavLink "
                  onClick={handleLeftBar}
                  onMouseEnter={handleAccountHover}
                  onMouseLeave={handleAccountOut}
                >
                  <span>
                    Account{" "}
                    <i className="fa-solid fa-chevron-right fafaRight"></i>
                  </span>
                  <div
                    className="accountItems"
                    style={{ display: showAccountList ? "flex" : "none" }}
                  >
                    <Link
                      className="accountLinkNav"
                      to="/loginScreen"
                      onClick={handleLeftBar}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/registerScreen/customerRegisterAccount"
                      onClick={handleLeftBar}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}
              <Link
                to="/blogScreen"
                className="mobileNavLink"
                onClick={handleLeftBar}
              >
                Cart
              </Link>
              <Link
                to="/product-screen-clothing"
                className="mobileNavLink"
                onClick={handleLeftBar}
              >
                Clothing & Accessories
              </Link>
              <Link
                to="/product-screen-health"
                className="mobileNavLink"
                onClick={handleLeftBar}
              >
                Healht & Beauty
              </Link>
              <Link
                to="/product-screen-art"
                className="mobileNavLink"
                onClick={handleLeftBar}
              >
                Art & Craft
              </Link>
              <Link
                to="/product-screen-pottery"
                className="mobileNavLink"
                onClick={handleLeftBar}
              >
                Pottery
              </Link>
              <Link
                to="/product-screen-others"
                className="mobileNavLink"
                onClick={handleLeftBar}
              >
                Other Categories
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideDrawer;
