import React, { useState, useContext } from "react";

import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../provider/userProvider";
import { Button, Modal } from "react-bootstrap";
import LogOut from "../logOut";
import bestWishLogo from "../../assets/images/bestWishesLogo.svg";
import CartContext from "../../provider/cartProvider";

const SideDrawer = ({ show, click }) => {
  const { state } = useContext(UserContext);
  const [showBar, setShowBar] = useState(false);
  const sideDrawerClass = ["sidedrawer"];
  const [showLeftBar, setShowBarLeftBar] = useState(false);
  const [showAccountList, setShowBarAccountList] = useState(false);
  const handleClose = () => setShowBar(false);
  const handleShow = () => setShowBar(true);
  const navigate = useNavigate();
  const { cartState, CART } = useContext(CartContext);

  const LogOut = () => {
    // setShow(false);
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    localStorage.removeItem("userID");
    localStorage.removeItem("isSeller");
    // localStorage.removeItem("sellerData");
    localStorage.removeItem("saveSeller");
    navigate("/");

    window.location.reload();
  };

  const handleLeftBar = () => {
    setShowBarLeftBar(!showLeftBar);
    showAccountList
      ? setShowBarAccountList(false)
      : setShowBarAccountList(true);
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
      {!state.switchUser ? (
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
          <div className="mobileNavBottomLeft" style={{ display: "flex" }}>
            <div className="mobileNavLeftList">
              <Link
                to="/blog-screen/lifestyle"
                className="mobileNavLink"
                onClick={click}
              >
                Blog
              </Link>
              <Link
                to="/blogScreen/lifestyle"
                className="mobileNavLink"
                onClick={click}
              >
                Help
              </Link>

              {state.token ? (
                <div
                  className="mobileAcct mobileNavLink "
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
                      onClick={click}
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
                  // onClick={handleLeftBar}
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
          <div className="mobileNavBottomLeft" style={{ display: "flex" }}>
            <div className="mobileNavLeftList">
              <Link
                to="/product-screen-clothing"
                className="mobileNavLink"
                onClick={click}
              >
                Product
              </Link>
              <Link
                to="/blog-screen/lifestyle"
                className="mobileNavLink"
                onClick={click}
              >
                Blog
              </Link>
              <Link
                to="/blogScreen/lifestyle"
                className="mobileNavLink"
                onClick={click}
              >
                Help
              </Link>

              {state.token ? (
                <div
                  className="mobileAcct mobileNavLink "
                  // onClick={handleLeftBar}
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
                      onClick={click}
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
                  // onClick={handleLeftBar}
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
                      onClick={click}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/registerScreen/customerRegisterAccount"
                      onClick={click}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}
              <Link to="/cart-screen" className="mobileNavLink" onClick={click}>
                <div className="navCart-con">
                  Cart{" "}
                  <div className="navCart">
                    <span>{cartState?.cart?.length}</span>
                  </div>
                </div>{" "}
              </Link>
              <Link
                to="/product-screen-clothing"
                className="mobileNavLink"
                onClick={click}
              >
                Clothing & Accessories
              </Link>
              <Link
                to="/product-screen-health"
                className="mobileNavLink"
                onClick={click}
              >
                Healht & Beauty
              </Link>
              <Link
                to="/product-screen-art"
                className="mobileNavLink"
                onClick={click}
              >
                Art & Craft
              </Link>
              <Link
                to="/product-screen-pottery"
                className="mobileNavLink"
                onClick={click}
              >
                Pottery
              </Link>
              <Link
                to="/product-screen-others"
                className="mobileNavLink"
                onClick={click}
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
