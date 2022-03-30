import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Modal,
} from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import logout from "../../assets/icons/logout.svg";
import message from "../../assets/icons/message.png";
import sell from "../../assets/icons/sell.svg";
import orders from "../../assets/icons/order.png";
import profile from "../../assets/icons/profile.svg";

const TopRightNav = ({ user }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    localStorage.removeItem("userID");
    window.location.reload();
  };
  return (
    <div>
      <Navbar bg="light" expand="lg" id="topRightNavContainer">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto topRightNav">
              <Nav.Link className="topRightNavLink">
                <Link to="/productScreenChange">Product</Link>
              </Nav.Link>
              <Nav.Link className="topRightNavLink">
                <Link to="/blogScreen">Blog</Link>
              </Nav.Link>
              <NavDropdown
                title="Help"
                id="topRightDropdown"
                className="topRightDropdown"
              >
                <NavDropdown.Item href="#action/3.1" className="topRightLink">
                  Services
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="topRightLink">
                  About us
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="topRightLink">
                  Support center
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="topRightLink">
                  Term of use
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="topRightLink">
                  Contact
                </NavDropdown.Item>
              </NavDropdown>
              {user ? (
                <NavDropdown
                  title="Account"
                  id="topRightDropdown"
                  className="topRightDropdown"
                >
                  <NavDropdown.Item className="topRightLink">
                    {" "}
                    <Link
                      className="navLinks"
                      to="customerProfileScreen/editCustomerProfile"
                    >
                      <img
                        src={profile}
                        alt=""
                        className="navIcons profileIcon"
                      />
                      View Profile
                    </Link>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item className="topRightLink">
                    <Link
                      className="navLinks"
                      to="customerProfileScreen/messages"
                    >
                      {" "}
                      <img
                        src={message}
                        alt=""
                        className="navIcons messageIcon"
                      />
                      Message
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="topRightLink">
                    <Link
                      className="navLinks"
                      to="customerProfileScreen/customerOrders/orderAll"
                    >
                      {" "}
                      <img src={orders} alt="" className="navIcons orderIcon" />
                      Orders
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="topRightLink">
                    <Link
                      className="navLinks"
                      to="/registerScreen/sellerRegisterAccount"
                    >
                      <img src={sell} alt="" className="navIcons sellIcon" />
                      Sell on Best Wishes
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="topRightLink"
                    onClick={handleShow}
                  >
                    {" "}
                    <img src={logout} alt="" className="navIcons logoutIcon" />
                    Log-out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown
                  title="Account"
                  id="topRightDropdown"
                  className="topRightDropdown"
                >
                  <NavDropdown.Item className="topRightLink">
                    {" "}
                    <Link to="/loginScreen/customerLoginAccount">
                      Sign In
                    </Link>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item className="topRightLink">
                    <Link to="/registerScreen/customerRegisterAccount">
                      Sign Up
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}

              <Nav.Link href="#link" className="topRightNavLink">
                <p>
                  Cart&nbsp;<i className="fa fa-cartfa fa-shopping-cart"></i>
                </p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
            onClick={logOut}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TopRightNav;
