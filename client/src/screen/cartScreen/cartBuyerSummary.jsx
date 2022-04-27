import React, { useState } from "react";
import "./style.css";
import { Modal } from "react-bootstrap";
import Lottie from "lottie-react";
import doneIcon from "../../assets/images/doneIcon.json";
import masterCardIcon from "../../assets/icons/masterCardIcon.svg";
import { Link } from "react-router-dom";
const CartBuyerSummary = () => {
  //
  const [show, setShow] = useState(false);

  const handleCloseModal = () => {
    setShow(false);
  };
  return (
    <div className="cart-buyer-address">
      <div className="cart-buyer-address-top">
        <div className="cart-buyer-address-top-container">
          <div className="cart-buyer-circle-box cart-chect-out-box">
            <div className="cart-buyer-circle">1</div>
            <div className="cart-dash-line"></div>
          </div>
          <span>Check-out</span>
        </div>
        <div className="cart-buyer-address-top-container">
          <div className="cart-buyer-circle-box ">
            <div className=" cart-buyer-circle">2</div>
            <div className="cart-dash-line"></div>
          </div>
          <span className="buyer-text-shipping">Shipping details</span>
        </div>
        <div className="cart-buyer-address-top-container">
          <div className="cart-buyer-circle-box">
            <div className=" cart-buyer-circle">3</div>
            <div className="cart-dash-line"></div>
          </div>
          <span className="buyer-text-payment">Payment</span>
        </div>
        <div className="cart-buyer-address-top-container">
          <div className="cart-buyer-circle-box">
            <div className=" buyyer-circle-open">4</div>
          </div>
          <span className="buyer-text-summary">Summary</span>
        </div>
      </div>
      <div className="cart-buyer-address-bottom">
        <span>Summary</span>
        <h6>Review your orders and shipping details before making payment</h6>
        <div className="cart-buyer-summary-container">
          <span>Order summary</span>
          <div className="cart-order-summary-text">
            <span>Subtotal :</span>
            <span>€49.99</span>
          </div>
          <hr />
          <div className="cart-order-summary-text">
            <span>Shipping fee :</span>
            <span>€49.99</span>
          </div>
          <hr />
          <div className="cart-order-summary-text-total">
            <span>Total :</span>
            <span>€49.99</span>
          </div>
          <hr />
        </div>
        <div className="cart-buyer-summary-container">
          <span>Payment method</span>
          <div className="cart-order-summary-text">
            <span>Name on card : </span>
            <span>John Doe</span>
          </div>
          <hr />
          <div className="cart-order-summary-text">
            <span>Card type :</span>
            <img src={masterCardIcon} alt="" className="card-summary-card" />
          </div>
          <hr />
          <div className="cart-order-summary-text">
            <span>Card info : </span>
            <span>1234 XXXX XXXX 4568</span>
          </div>
          <hr />
        </div>
        <div className="cart-buyer-summary-container">
          <span>Shipping details</span>
          <div className="cart-order-summary-text">
            <span>Name :</span>
            <span>John Doe</span>
          </div>
          <hr />
          <div className="cart-order-summary-text">
            <span>Address : </span>
            <span>Rakuten 31 B</span>
          </div>
          <hr />
          <div className="cart-order-summary-text">
            <span>Email : </span>
            <span>john.doe@gmail.com</span>
          </div>
          <hr />
          <div className="cart-order-summary-text">
            <span>State, Country : </span>
            <span>Helsinki, Finland</span>
          </div>
          <hr />
        </div>

        <div className="address-proceed-btn" onClick={() => setShow(true)}>
          <span>Complete payment</span>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal-container-top-summary">
              <div className="modal-top-text">
                <Lottie animationData={doneIcon} />
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-container">
            <div className="modal-container-middle-summary">
              <h5>ORDER COMPLETED</h5>
              <span>
                Check the status of your package on order in your profile
              </span>
            </div>
            <div className="modal-container-buttom">
              <Link
                to="/customerProfileScreen/customerOrders/orderAll"
                className="goto-profile-btn"
              >
                <span>Go to profile</span>
              </Link>
              <Link to="/product-screen-clothing" className="cont-shopping-btn">
                <span>Continue shopping</span>
              </Link>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartBuyerSummary;
