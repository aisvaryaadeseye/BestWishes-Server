import React, { useState, useContext } from "react";
import "./style.css";
import customerImg from "../../assets/images/customerImg.jpg";
import { Link, Outlet } from "react-router-dom";
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
// import UserContext from "../../provider/userProvider";

const CustomerProfileScreen = () => {
  // const { state, USER } = useContext(UserContext);
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
    <div className="customerProfileScreen">
      <div className="customerProfileSideBar">
        <div className="customerProfileSideBarTop">
          <div className="customerProfileImgContainer">
            <img src={customerImg} alt="" className="customerProfileImg" />
          </div>
          <h1>Jonh Doe</h1>
        </div>
        {/* ============ */}
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

        <nav className="customerProfileSideBarBottom">
          <h1>Account Detail</h1>

          <Link to="editCustomerProfile">
            <div className="sidebarNav">
              <img src={edit} alt="" className="iconImg" />
              Edit Profile
            </div>
          </Link>
          <Link to="messages">
            <div className="sidebarNav">
              <img src={message} alt="" className="iconImg" />
              Messages <div className="messageCount">3</div>
            </div>
          </Link>
          <Link to="customerOrders/orderAll">
            <div className="sidebarNav">
              <img src={orders} alt="" className="iconImg" />
              Orders
            </div>
          </Link>
          <Link to="SavedItems">
            <div className="sidebarNav">
              <img src={savedItem} alt="" className="iconImg" />
              Saved items
            </div>
          </Link>

          <Link to="customerPayment/payWithCard">
            <div className="sidebarNav">
              <img src={card} alt="" className="iconImg" />
              Payment
            </div>
          </Link>
          <Link to="customerPayment">
            <div className="sidebarNav">
              <img src={need} alt="" className="iconImg" />
              Need Assisstance ?
            </div>
          </Link>
          <Link to="editcustomerProfile">
            <div className="sidebarNav">
              <img src={setting} alt="" className="iconImg" />
              Account Settings
            </div>
          </Link>
          <Link to="becomeSeller">
            <div className="sidebarNav">
              <img src={becomeSeller} alt="" className="iconImg" />
              Become a seller
            </div>
          </Link>
          {/* <Link to="becomeAseller">
            <div className="sidebarNav">
              <img src={becomeSeller} alt="" className="iconImg" />
              Become a seller
            </div>
          </Link> */}

          <div className="sidebarNav" onClick={handleShow}>
            <img src={logout} alt="" className="iconImg" />
            Log-out
          </div>
        </nav>
      </div>
      <div className="customerProfileFeeds">
        <Outlet />
      </div>
    </div>
  );
};

export default CustomerProfileScreen;
