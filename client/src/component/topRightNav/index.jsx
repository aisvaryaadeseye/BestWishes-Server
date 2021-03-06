import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Modal,
} from "react-bootstrap";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import logout from "../../assets/icons/logout.svg";
import message from "../../assets/icons/message.png";
import sell from "../../assets/icons/sell.svg";
import orders from "../../assets/icons/order.png";
import profile from "../../assets/icons/profile.svg";
import customerImg from "../../assets/images/customerImg.jpg";
// import LogOut from "../logOut";
import UserContext from "../../provider/userProvider";
import CartContext from "../../provider/cartProvider";
import axios from "axios";
const TopRightNav = ({ user }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { state, USER } = useContext(UserContext);
  const { cartState, CART } = useContext(CartContext);
  const [saveSeller, setSaveSeller] = useState(false);
  const [checkSeller, setCheckSeller] = useState();
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  useEffect(() => {
    // if (localStorage.getItem("authToken")) {
    //   setToken(localStorage.getItem("authToken"));
    // }
    // setToken(state?.token);
    // console.log({ token: token });
  });
  useEffect(async () => {
    if (localStorage.getItem("authToken")) {
      await setToken(localStorage.getItem("authToken"));
      // console.log({ token: token });
      await getUserData();
      // console.log({ IScheckSeller: checkSeller });
    }
  }, [token, checkSeller]);

  const LogOut = () => {
    setShow(false);
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    localStorage.removeItem("userID");
    localStorage.removeItem("isSeller");
    // localStorage.removeItem("sellerData");
    localStorage.removeItem("saveSeller");
    navigate("/");

    window.location.reload();
  };
  useEffect(() => {
    // console.log({ isSeller: state.isSeller });
    if (localStorage.getItem("saveSeller")) {
      setSaveSeller(localStorage.getItem("saveSeller"));
    }
  }, []);

  async function getUserData() {
    await axios
      .get(`/api/auth/get-user-token?token=${token}`)
      .then((res) => [setCheckSeller(res.data.user?.isSeller)]);
  }

  const handleBuyer = () => {
    USER.updateSwitchUser(false);
    navigate("/sellerprofilescreen/overview");
    // if (!state.switchUser) {
    //   navigate("/sellerprofilescreen/overview");
    // }
  };
  const handleSeller = () => {
    USER.updateSwitchUser(true);
    navigate("/");
  };

  return (
    <>
      {!state.switchUser ? (
        <div>
          <Navbar bg="light" expand="lg" id="topRightNavContainer">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto topRightNav">
                  <div className="topRightNavLink helpSellerAcc ">
                    <Link to="/blog-screen/lifestyle">Blog</Link>
                  </div>
                  <NavDropdown
                    title="Help"
                    id="topRightDropdown"
                    className="topRightDropdown"
                  >
                    <NavDropdown.Item className="topRightLink">
                      Services
                    </NavDropdown.Item>
                    <NavDropdown.Item className="topRightLink">
                      About us
                    </NavDropdown.Item>
                    <NavDropdown.Item className="topRightLink">
                      Support center
                    </NavDropdown.Item>
                    <NavDropdown.Item className="topRightLink">
                      Term of use
                    </NavDropdown.Item>
                    <NavDropdown.Item className="topRightLink">
                      Contact
                    </NavDropdown.Item>
                  </NavDropdown>
                  {user ? (
                    <div className="accountDiv accountDivSeller">
                      <img src={customerImg} alt="" className=" accontImgNav" />
                      <NavDropdown
                        title="Account"
                        id="topRightDropdown"
                        className="topRightDropdown"
                      >
                        <NavDropdown.Item className="topRightLink">
                          {" "}
                          <Link
                            className="navLinks"
                            to={
                              state.isSeller
                                ? "sellerprofilescreen/overview"
                                : "customerProfileScreen/editCustomerProfile"
                            }
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
                            <img
                              src={orders}
                              alt=""
                              className="navIcons orderIcon"
                            />
                            Orders
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="topRightLink">
                          <div className="navLinks" onClick={handleSeller}>
                            <img
                              src={sell}
                              alt=""
                              className="navIcons sellIcon"
                            />
                            Switch to Buyer
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="topRightLink"
                          onClick={handleShow}
                        >
                          {" "}
                          <img
                            src={logout}
                            alt=""
                            className="navIcons logoutIcon"
                          />
                          Log-out
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  ) : (
                    <div className="accountDiv">
                      <img
                        src={profile}
                        alt=""
                        className="navIcons profileIcon acctIconNav"
                      />
                      <NavDropdown
                        title="Account"
                        id="topRightDropdown"
                        className="topRightDropdown"
                      >
                        <NavDropdown.Item className="topRightLink">
                          {" "}
                          <Link to="/loginScreen">Sign In</Link>{" "}
                        </NavDropdown.Item>
                        <NavDropdown.Item className="topRightLink">
                          <Link to="/registerScreen/customerRegisterAccount">
                            Sign Up
                          </Link>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  )}
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
                onClick={LogOut}
              >
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        // =================
        <div>
          <Navbar bg="light" expand="lg" id="topRightNavContainer">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto topRightNav">
                  <div className="topRightNavLink">
                    <Link to="/product-screen-clothing">Product</Link>
                  </div>
                  <div className="topRightNavLink ">
                    <Link to="/blog-screen/lifestyle">Blog</Link>
                  </div>
                  <NavDropdown
                    title="Help"
                    id="topRightDropdown"
                    className="topRightDropdown "
                  >
                    <NavDropdown.Item className="topRightLink">
                      Services
                    </NavDropdown.Item>
                    <NavDropdown.Item className="topRightLink">
                      About us
                    </NavDropdown.Item>
                    <NavDropdown.Item className="topRightLink">
                      Support center
                    </NavDropdown.Item>
                    <NavDropdown.Item className="topRightLink">
                      Term of use
                    </NavDropdown.Item>
                    <NavDropdown.Item className="topRightLink">
                      Contact
                    </NavDropdown.Item>
                  </NavDropdown>
                  {user ? (
                    <div className="accountDiv">
                      <img src={customerImg} alt="" className=" accontImgNav" />
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
                            <img
                              src={orders}
                              alt=""
                              className="navIcons orderIcon"
                            />
                            Orders
                          </Link>
                        </NavDropdown.Item>

                        {checkSeller ? (
                          <NavDropdown.Item className="topRightLink">
                            <div className="navLinks" onClick={handleBuyer}>
                              <img
                                src={sell}
                                alt=""
                                className="navIcons sellIcon"
                              />
                              Switch to Sellers
                            </div>
                          </NavDropdown.Item>
                        ) : (
                          <NavDropdown.Item className="topRightLink">
                            <Link
                              className="navLinks"
                              to="/customerProfileScreen/becomeSeller"
                            >
                              <img
                                src={sell}
                                alt=""
                                className="navIcons sellIcon"
                              />
                              Sell on Best Wishes
                            </Link>
                          </NavDropdown.Item>
                        )}
                        <NavDropdown.Item
                          className="topRightLink"
                          onClick={handleShow}
                        >
                          {" "}
                          <img
                            src={logout}
                            alt=""
                            className="navIcons logoutIcon"
                          />
                          Log-out
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  ) : (
                    <div className="accountDiv">
                      <img
                        src={profile}
                        alt=""
                        className="navIcons profileIcon acctIconNav"
                      />
                      <NavDropdown
                        title="Account"
                        id="topRightDropdown"
                        className="topRightDropdown"
                      >
                        <NavDropdown.Item className="topRightLink">
                          {" "}
                          <Link to="/loginScreen">Sign In</Link>{" "}
                        </NavDropdown.Item>
                        <NavDropdown.Item className="topRightLink">
                          <Link to="/registerScreen/customerRegisterAccount">
                            Sign Up
                          </Link>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  )}

                  <div className="topRightNavLink">
                    <Link to="/cart-screen">
                      Cart&nbsp;
                      <i className="fa fa-cartfa fa-shopping-cart"></i>
                      {user && (
                        <div className="cartCounter">
                          <span>{cartState?.cart?.length}</span>
                        </div>
                      )}
                    </Link>
                  </div>
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
                onClick={LogOut}
              >
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default TopRightNav;
