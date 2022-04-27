import React, { useState } from "react";
import "./style.css";
import CardPayment from "../../component/cardPayment";
import { Modal } from "react-bootstrap";
import visaCardIcon from "../../assets/icons/visaCardIcon.svg";
import masterCardIcon from "../../assets/icons/masterCardIcon.svg";
import expressCard from "../../assets/icons/expressCard.svg";
import discoverCard from "../../assets/icons/discoverCard.svg";
import cardIcon from "../../assets/icons/cardIcon.svg";
import ccvIcon from "../../assets/icons/ccvIcon.svg";
import lockIcon from "../../assets/icons/lockIcon.svg";
import Switch from "react-switch";
import { Link } from "react-router-dom";

const cardList = [{ id: "01" }, { id: "02" }, { id: "03" }];
const CartBuyerPayment = () => {
  const [cardCheck, setCardCheck] = useState(null);
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
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
            <div className=" buyyer-circle-open">3</div>
            <div className="cart-dash-line-off"></div>
          </div>
          <span className="buyer-text-payment">Payment</span>
        </div>
        <div className="cart-buyer-address-top-container">
          <div className="cart-buyer-circle-box">
            <div className=" buyyer-circle-close">4</div>
          </div>
          <span className="buyer-text-summary">Summary</span>
        </div>
      </div>
      <div className="cart-buyer-address-bottom">
        <span>Choose a payment method</span>
        <h6>
          You will not be charged until your review order on the next page
        </h6>
        <div className="cart-buyer-text-container">
          <span>Card</span>
          <span onClick={() => setShow(true)}>Add new card</span>
        </div>
        <div className="cart-buyer-payment-option">
          <div className="star-rating">
            {cardList.map((x, i) => {
              return (
                <div onClick={() => setCardCheck(x)}>
                  {" "}
                  <CardPayment
                    showCheck={true}
                    checkBg={cardCheck?.id === x.id && true}
                    key={i}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Link to="/cart-buyer-summary" className="address-proceed-btn">
          <span>Review your order</span>
        </Link>
      </div>
      <Modal
        show={show}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal-container-top">
              <div className="modal-top-text">
                <h5>Add new card</h5>
                <h6>The card will be saved on your profle if you wish</h6>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-container">
            <div className="modal-container-middle"></div>
            <div className="modal-container-bottom ">
              <div className="cart-pay-card-title">
                <span>Card</span>
                <div className="cart-pay-card-title-img">
                  <img src={visaCardIcon} className="cart-pay-card-icon" />
                  <img src={masterCardIcon} className="cart-pay-card-icon" />
                  <img src={discoverCard} className="cart-pay-card-icon" />
                  <img src={expressCard} className="cart-pay-card-icon" />
                </div>
              </div>
              <div className="regInput passForm payment-edit-input   ">
                <span className="userEmail">Name on card</span>
                <div className="passwordContainer editCusInputField">
                  <input className="passwordInput regInputField" />
                </div>
              </div>
              <div className="regInput passForm payment-edit-input   ">
                <span className="userEmail">Card number</span>
                <div className="passwordContainer editCusInputField">
                  <img src={cardIcon} className="card-icon" />
                  <input className="passwordInput regInputField" />
                  <img src={lockIcon} alt="" className="lock-icon" />
                </div>
              </div>

              <div className="editCustomerContainer cart-buyer-pay-input">
                <div className="regInput passForm ">
                  <span className="userEmail">Date on card</span>
                  <div className="passwordContainer editCusInputField">
                    <input className="passwordInput regInputField" />
                  </div>
                </div>
                <div className="regInput passForm ">
                  <span className="userEmail">CVV/CVC</span>
                  <div className="passwordContainer editCusInputField">
                    <img src={ccvIcon} className="card-icon" />
                    <input className="passwordInput regInputField" />
                    <img src={lockIcon} alt="" className="lock-icon" />
                  </div>
                </div>
              </div>
              <div className="save-card-container">
                <Switch
                  onChange={handleChange}
                  checked={checked}
                  className="react-switch"
                />
                <span>Save card</span>
              </div>
              <Link to="/cart-buyer-summary" className="">
                <div className="edit-buyer-payment-btn">
                  <span>Proceed </span>
                </div>
              </Link>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartBuyerPayment;
