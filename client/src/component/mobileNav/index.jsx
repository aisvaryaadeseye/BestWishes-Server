import React, { useState, useContext } from "react";
import "./style.css";
import bestWishLogo from "../../assets/images/bestWishesLogo.svg";
import { Link } from "react-router-dom";
import UserContext from "../../provider/userProvider";

const MobileNav = ({ click }) => {
  const [showLeftBar, setShowLeftBar] = useState(false);
  const [showAccountList, setShowAccountList] = useState(false);
  const { state } = useContext(UserContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLeftBar = () => {
    setShowLeftBar(!showLeftBar);
    setShowAccountList(false);
  };

  const handleAccountHover = () => {
    setShowAccountList(true);
  };
  const handleAccountOut = () => {
    setShowAccountList(false);
  };
  return (
    <div className="mobileNav">
      <div className="mobileNavTop">
        <Link to={state.isSeller ? "/sellerprofilescreen/overview" : "/"}>
          <img src={bestWishLogo} className="bestWishLogo" />
        </Link>
        <div className="hamburgerContainer" onClick={click}>
          <div className="">
            {/* <div className="" onClick={handleLeftBar}> */}
            <i className="fa fa-bars leftBar" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      {/* <div
        className="mobileNavBottomLeft"
        // style={{ display: "flex" }}
        style={{ display: showLeftBar ? "flex" : "none" }}
      >
        <div className="mobileNavLeftList">
          <Link
            to="/productScreenClothing"
            className="mobileNavLink"
            onClick={handleLeftBar}
          >
            Product
          </Link>
          <Link
            to="/productScreenClothing"
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
                Account <i className="fa-solid fa-chevron-right fafaRight"></i>
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
                show={show}
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
                Account <i className="fa-solid fa-chevron-right fafaRight"></i>
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
            to="/blogScreen"
            className="mobileNavLink"
            onClick={handleLeftBar}
          >
            Clothing & Accessories
          </Link>
          <Link
            to="/productScreenClothing"
            className="mobileNavLink"
            onClick={handleLeftBar}
          >
            Healht & Beauty
          </Link>
          <Link
            to="/productScreenHealth"
            className="mobileNavLink"
            onClick={handleLeftBar}
          >
            Art & Craft
          </Link>
          <Link
            to="/productScreenHealth"
            className="mobileNavLink"
            onClick={handleLeftBar}
          >
            Pottery
          </Link>
          <Link
            to="/productScreenHealth"
            className="mobileNavLink"
            onClick={handleLeftBar}
          >
            Other Categories
          </Link>
        </div>
      </div>
      <Modal
        show={show}
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
      </Modal> */}
    </div>
  );
};

export default MobileNav;
