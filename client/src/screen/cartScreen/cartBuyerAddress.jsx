import React, { useState, useMemo, useEffect, useContext } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import "./style.css";
import colorPen from "../../assets/icons/colorPen.svg";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
const CartBuyerAddress = () => {
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState("");

  const handleCloseModal = () => {
    setShow(false);
  };
  const options = useMemo(() => countryList().getData(), []);

  const countryHandler = (country) => {
    setCountry(country);
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
            <div className=" buyyer-circle-open">2</div>
            <div className="cart-dash-line-off"></div>
          </div>
          <span className="buyer-text-shipping">Shipping details</span>
        </div>
        <div className="cart-buyer-address-top-container">
          <div className="cart-buyer-circle-box">
            <div className=" buyyer-circle-close">3</div>
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
        <span>Shipping Details</span>
        <div className="cart-buyer-shipping-addr">
          <div className="cart-buyer-shipping-addr-text">
            <h5>John Doe</h5>
            <img src={colorPen} alt="" onClick={() => setShow(true)} />
          </div>
          <div className="cart-buyer-shipping-addr-text">
            <span>Phone Number :</span>
            <span>+2345678987</span>
          </div>
          <div className="cart-buyer-shipping-addr-text">
            <span>Country, State :</span>
            <span>Finland, Helsinki</span>
          </div>
          <div className="cart-buyer-shipping-addr-text">
            <span>Address :</span>
            <span>FinlandhifHelsinki</span>
          </div>
        </div>
        <Link to="/cart-buyer-payment" className="address-proceed-btn">
          <span>Proceed to payment</span>
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
              {/* <img src={customerImg} alt="" className="customer-review-img" /> */}
              <div className="modal-top-text">
                <h5>Edit Shipping Details</h5>
                <h6>The Changes made here will reflect on your profile</h6>
              </div>
            </div>
            {/* <Button variant="secondary" onClick={() => setShow(false)}>
                Cancel
              </Button> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-container">
            <div className="modal-container-middle"></div>
            <div className="modal-container-bottom buyyer-edit-address-container">
              <div className="regInput passForm buyer-edit-input   ">
                <span className="userEmail">Full name</span>
                <div className="passwordContainer editCusInputField">
                  <input
                    // placeholder="your name"
                    // name="fullName"
                    // value={fullName}
                    // onChange={(e) => setFullName(e.target.value)}
                    className="passwordInput regInputField"
                  />
                </div>
              </div>
              <div className="regInput passForm buyer-edit-input   ">
                <span className="userEmail">Email</span>
                <div className="passwordContainer editCusInputField">
                  <input
                    // placeholder="your name"
                    // name="fullName"
                    // value={fullName}
                    // onChange={(e) => setFullName(e.target.value)}
                    className="passwordInput regInputField"
                  />
                </div>
              </div>
              <div className="regInput passForm buyer-edit-input   ">
                <span className="userEmail">Phone Number</span>
                <div className="passwordContainer editCusInputField">
                  <input
                    // placeholder="your name"
                    // name="fullName"
                    // value={fullName}
                    // onChange={(e) => setFullName(e.target.value)}
                    className="passwordInput regInputField"
                  />
                </div>
              </div>
              <div className="regInput passForm buyer-edit-input  ">
                <span className="userEmail">Date of birth (optional)</span>
                <div className="passwordContainer editCusInputField">
                  <input
                    type="date"
                    // placeholder="sample@gmail.com"
                    // name="email"
                    // value={email}
                    //
                    // onChange={(e) => setEmail(e.target.value)}
                    className="passwordInput regInputField"
                  />
                </div>
                <div className="regInput passForm buyer-edit-input ">
                  <span className="userEmail">Gender</span>
                  <div>
                    <select
                      className="selectContainer"
                      // onChange={(val) => setGenderState(val.target.value)}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="regInput passForm buyer-edit-input  ">
                  <span className="userEmail">Country</span>
                  {/* <div className="countrySelectContainer"> */}
                  <Select
                    className="countrySelect"
                    options={options}
                    value={country}
                    onChange={countryHandler}
                  />
                  {/* </div> */}
                </div>
                <div className="regInput passForm buyer-edit-input ">
                  <span className="userEmail">State</span>
                  <div className="passwordContainer editCusInputField">
                    <input className="passwordInput regInputField" />
                  </div>
                </div>
                <div className="regInput passForm buyer-edit-input ">
                  <span className="userEmail">City (optional)</span>
                  <div className="passwordContainer editCusInputField">
                    <input className="passwordInput regInputField" />
                  </div>
                </div>
                <div className="regInput passForm buyer-edit-input ">
                  <span className="userEmail">Postal Code (Optional)</span>
                  <div className="passwordContainer editCusInputField">
                    <input className="passwordInput regInputField" />
                  </div>
                </div>
                <div className="regInput passForm buyer-edit-input ">
                  <span className="userEmail">Street Address</span>
                  <div className="passwordContainer editCusInputField">
                    <input className="passwordInput regInputField" />
                  </div>
                </div>
                <div className="edit-buyer-shipping-btn">
                  <span>Save</span>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartBuyerAddress;
