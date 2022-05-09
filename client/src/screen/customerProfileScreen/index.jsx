import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import customerImg from "../../assets/images/customerImg.jpg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import edit from "../../assets/icons/edit.svg";
import logout from "../../assets/icons/logout.svg";
import message from "../../assets/icons/message.png";
import becomeSeller from "../../assets/icons/becomeSeller.svg";
import orders from "../../assets/icons/order.png";
import need from "../../assets/icons/need.svg";
import setting from "../../assets/icons/setting.svg";
import card from "../../assets/icons/card.svg";
import savedItem from "../../assets/icons/savedItem.svg";
import LogOut from "../../component/logOut";
import UserContext from "../../provider/userProvider";
import axios from "axios";
const CustomerProfileScreen = () => {
  const { state, USER } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveSeller, setSaveSeller] = useState(null);
  const customerDrawerClass = ["customerSideBar"];
  const [sideToggle, setSideToggle] = useState(true);
  const navigate = useNavigate();
  const [selectedLink, setSelectedLink] = useState(null);
  const [token, setToken] = useState("");
  const [checkSeller, setCheckSeller] = useState();

  var navLinks = [
    { img: edit, link: "editCustomerProfile", text: "Edit Profile" },
    { img: message, link: "messages", text: "Messages" },
    { img: orders, link: "customerOrders/orderAll", text: " Orders" },
    { img: savedItem, link: "SavedItems", text: "Saved items" },
    { img: card, link: "customerPayment/payWithCard", text: "Payment" },
    { img: need, link: "editCustomerProfile", text: " Need Assisstance ?" },
    { img: setting, link: "account-settings", text: " Account Settings" },
  ];

  if (sideToggle) {
    customerDrawerClass.push("show");
  }

  useEffect(async () => {
    if (localStorage.getItem("authToken")) {
      await setToken(localStorage.getItem("authToken"));
      // console.log({ token: token });
      await getUserData();
      // console.log({ IScheckSellerprofile: checkSeller });
    }
  }, [token, checkSeller]);

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

  const handleSideBar = () => {
    setSideToggle(!sideToggle);
  };
  const handleSide = () => {
    if (!sideToggle) {
      setSideToggle(true);
    }
  };

  useEffect(() => {
    // console.log({ mydata: state.user.user.email });
  });

  return (
    <div className="customerProfileScreen" onClick={handleSide}>
      <div className="sidebarMenu">
        <span onClick={handleSideBar}>
          Menu <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </span>
      </div>
      <div className={customerDrawerClass.join(" ")}>
        <div className="customerProfileSideBarTop">
          <div className="customerProfileImgContainer">
            <img
              src={
                state?.user?.user?.profileIMAGE &&
                state?.user?.user?.profileIMAGE
              }
              alt=""
              className="customerProfileImg"
            />
          </div>
          {<span>{state?.user?.user?.fullName}</span>}
        </div>

        <nav className="customerProfileSideBarBottom">
          <h1>Account Detail</h1>
          {navLinks.map((x, i) => {
            return (
              <Link key={i} to={x.link}>
                <div
                  className="sidebarNav"
                  style={{
                    backgroundColor: selectedLink?.text === x.text && "#fef5ed",
                  }}
                  onClick={() => setSelectedLink(x)}
                >
                  <img src={x.img} alt="" className="iconImg" />
                  {x.text}{" "}
                  {x.text === "Messages" && (
                    <div className="messageCount">6</div>
                  )}
                  {x.text === "Orders" && (
                    <div className="messageCount">10</div>
                  )}
                </div>
              </Link>
            );
          })}

          {checkSeller ? (
            <div className="sidebarNav" onClick={handleBuyer}>
              <img src={becomeSeller} alt="" className="iconImg" />
              Switch to Seller
            </div>
          ) : (
            <Link to="becomeSeller">
              <div className="sidebarNav">
                <img src={becomeSeller} alt="" className="iconImg" />
                Become a seller
              </div>
            </Link>
          )}
          <div className="sidebarNav" onClick={handleShow}>
            <img src={logout} alt="" className="iconImg" />
            Log-out
          </div>
        </nav>
      </div>

      {/* ====== */}
      <div className="customerProfileSideBar">
        <div className="customerProfileSideBarTop">
          <div className="customerProfileImgContainer">
            <img
              src={
                state?.user?.user?.profileIMAGE &&
                state?.user?.user?.profileIMAGE
              }
              alt=""
              className="customerProfileImg"
            />
          </div>
          {<span>{state?.user?.user?.fullName}</span>}
        </div>

        <nav className="customerProfileSideBarBottom">
          <h1>Account Detail</h1>
          {navLinks.map((x, i) => {
            return (
              <Link key={i} to={x.link}>
                <div
                  className="sidebarNav"
                  onClick={() => setSelectedLink(x)}
                  style={{
                    backgroundColor: selectedLink?.text === x.text && "#fef5ed",
                  }}
                >
                  <img src={x.img} alt="" className="iconImg" />
                  {x.text}{" "}
                  {x.text === "Messages" && (
                    <div className="messageCount">6</div>
                  )}
                  {x.text === "Orders" && (
                    <div className="messageCount">10</div>
                  )}
                </div>
              </Link>
            );
          })}

          {checkSeller ? (
            <div className="sidebarNav" onClick={handleBuyer}>
              <img src={becomeSeller} alt="" className="iconImg" />
              Switch to Seller
            </div>
          ) : (
            <Link to="becomeSeller">
              <div className="sidebarNav">
                <img src={becomeSeller} alt="" className="iconImg" />
                Become a seller
              </div>
            </Link>
          )}
          <div className="sidebarNav" onClick={handleShow}>
            <img src={logout} alt="" className="iconImg" />
            Log-out
          </div>
        </nav>
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
      <div className="customerProfileFeeds">
        <Outlet />
      </div>
    </div>
  );
};

export default CustomerProfileScreen;
