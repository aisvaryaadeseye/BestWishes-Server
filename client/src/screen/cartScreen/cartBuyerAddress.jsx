import React, { useState, useMemo, useEffect, useContext } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import "./style.css";
import colorPen from "../../assets/icons/colorPen.svg";
// import { Modal } from "react-bootstrap";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import UserContext from "../../provider/userProvider";
import axios from "axios";
import { useIsMounted } from "../../component/isMounted";
import ScreenSize from "../../component/screenSize/screenSize";

const CartBuyerAddress = () => {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = useState(false);
  const { state, USER } = useContext(UserContext);
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState("");
  const [countryState, setCountryState] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [city, setCity] = useState();
  const [postaCode, setPostaCode] = useState();
  const [dob, setDob] = useState();
  const [selectGender, setSelectGender] = useState();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userData, setUserData] = useState({});
  // const [userID, setUserID] = useState("");
  const size = ScreenSize();
  const handleClose = () => setOpen(false);

  const isMounted = useIsMounted();

  const style = {
    position: "absolute",
    top: "20%",
    right: size.width < 600 ? "1%" : "40%",
    transform: "translateX(50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "0.5em",

    boxShadow: 24,
    p: 4,
  };

  const handleCloseModal = () => {
    setShow(false);
  };
  const options = useMemo(() => countryList().getData(), []);

  const countryHandler = (country) => {
    setCountry(country);
  };

  // formData.append("country", country.label);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/auth/update-user?token=${state.token}`,
        {
          fullName,
          email,
          phone,
          country: country.label,
          countryState,
          streetAddress,
          city,
          postaCode,
          dob,
          selectGender,
        }
      );
      USER.updateUserData(data);
      console.log({ usess: data });
      // localStorage.setItem("user", JSON.stringify(data));
      setSuccess("Success!");
      setTimeout(() => {
        setSuccess("");
        setOpen(false);
      }, 1500);
    } catch (error) {
      console.log(error + "erro saving");
    }
  }

  function getUserData() {
    const { data } = axios.get(`/api/auth/get-user?token=${state.token}`);

    if (isMounted.current) {
      setUserData(data);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUserData(JSON.parse(localStorage.getItem("user")));
    }
    // setTimeout(() => {
    //   getUserData();
    // }, 5000);

    // console.log({ userData: userData.user.fullName });
  }, []);

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
            <h5>{state?.user?.user?.fullName}</h5>
            <img src={colorPen} alt="" onClick={() => setOpen(true)} />
          </div>
          <div className="cart-buyer-shipping-addr-text">
            <span>Phone Number :</span>
            <span>{state?.user?.user?.phone && state?.user?.user?.phone}</span>
          </div>
          <div className="cart-buyer-shipping-addr-text">
            <span>Country, State :</span>
            <span>
              {state?.user?.user?.country && state?.user?.user?.country + ","}
              {state?.user?.user?.countryState &&
                state?.user?.user?.countryState}{" "}
            </span>
          </div>
          <div className="cart-buyer-shipping-addr-text">
            <span>Address :</span>
            <span>{state?.user?.user?.streetAddress}</span>
          </div>
        </div>
        <Link to="/cart-buyer-payment" className="address-proceed-btn">
          <span>Proceed to payment</span>
        </Link>
      </div>
      {/* <Modal
        show={show}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal-container-top">
              <div className="modal-top-text">
                <h5>Edit Shipping Details</h5>
                <h6>The Changes made here will reflect on your profile</h6>
              </div>
            </div>
          
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="modal-container" onSubmit={handleSubmit}>
            <div className="modal-container-middle"></div>
            <div className="modal-container-bottom buyyer-edit-address-container">
              <div className="regInput passForm buyer-edit-input   ">
                <span className="userEmail">Full name</span>
                <div className="passwordContainer editCusInputField">
                  <input
                    placeholder="your name"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="passwordInput regInputField"
                  />
                </div>
              </div>
              <div className="regInput passForm buyer-edit-input   ">
                <span className="userEmail">Email</span>
                <div className="passwordContainer editCusInputField">
                  <input
                    placeholder="sample@gmail.com"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="passwordInput regInputField"
                  />
                </div>
              </div>
              <div className="regInput passForm buyer-edit-input   ">
                <span className="userEmail">Phone Number</span>
                <div className="passwordContainer editCusInputField">
                  <input
                    placeholder="your phone number"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="passwordInput regInputField"
                  />
                </div>
              </div>
              <div className="regInput passForm buyer-edit-input  ">
                <span className="userEmail">Date of birth (optional)</span>
                <div className="passwordContainer editCusInputField">
                  <input
                    type="date"
                    placeholder=""
                    name="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="passwordInput regInputField"
                  />
                </div>
                <div className="regInput passForm buyer-edit-input ">
                  <span className="userEmail">Gender</span>
                  <div>
                    <select
                      className="selectContainer"
                      value={selectGender}
                      onChange={(e) => setSelectGender(e.target.value)}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="regInput passForm buyer-edit-input  ">
                  <span className="userEmail">Country</span>
                  <Select
                    className="countrySelect"
                    options={options}
                    value={country}
                    onChange={countryHandler}
                  />
                </div>
                <div className="regInput passForm buyer-edit-input ">
                  <span className="userEmail">State</span>
                  <div className="passwordContainer editCusInputField">
                    <input
                      className="passwordInput regInputField"
                      name="countryState"
                      value={countryState}
                      onChange={(e) => setCountryState(e.target.value)}
                    />
                  </div>
                </div>
                <div className="regInput passForm buyer-edit-input ">
                  <span className="userEmail">City (optional)</span>
                  <div className="passwordContainer editCusInputField">
                    <input
                      className="passwordInput regInputField"
                      name="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="regInput passForm buyer-edit-input ">
                  <span className="userEmail">Postal Code (Optional)</span>
                  <div className="passwordContainer editCusInputField">
                    <input
                      className="passwordInput regInputField"
                      name="postaCode"
                      value={postaCode}
                      onChange={(e) => setPostaCode(e.target.value)}
                    />
                  </div>
                </div>
                <div className="regInput passForm buyer-edit-input ">
                  <span className="userEmail">Street Address</span>
                  <div className="passwordContainer editCusInputField">
                    <input
                      className="passwordInput regInputField"
                      name="streetAddress"
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                    />
                  </div>
                </div>
                <button className="edit-buyer-shipping-btn">
                  <span>Save</span>
                </button>
              </div>
            </div>
            <h3 style={{ color: "green" }}>{success && success}</h3>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal> */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-container-top">
            <div className="modal-top-text">
              <h5>Edit Shipping Details</h5>
              <h6>The Changes made here will reflect on your profile</h6>
            </div>
          </div>
          <form className="modal-container" onSubmit={handleSubmit}>
            <div className="modal-container-middle"></div>
            <div className="modal-container-bottom buyyer-edit-address-container">
              <div className="regInput passForm buyer-edit-input   ">
                <span className="userEmail">Full name</span>
                <div className="passwordContainer editCusInputField">
                  <input
                    placeholder="your name"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="passwordInput regInputField"
                  />
                </div>
              </div>
              <div className="regInput passForm buyer-edit-input   ">
                <span className="userEmail">Email</span>
                <div className="passwordContainer editCusInputField">
                  <input
                    placeholder="sample@gmail.com"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="passwordInput regInputField"
                  />
                </div>
              </div>
              <div className="regInput passForm buyer-edit-input   ">
                <span className="userEmail">Phone Number</span>
                <div className="passwordContainer editCusInputField">
                  <input
                    placeholder="your phone number"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="passwordInput regInputField"
                  />
                </div>
              </div>
              <div className="regInput passForm buyer-edit-input  ">
                <span className="userEmail">Date of birth (optional)</span>
                <div className="passwordContainer editCusInputField">
                  <input
                    type="date"
                    placeholder=""
                    name="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="passwordInput regInputField"
                  />
                </div>
                <div className="regInput passForm buyer-edit-input ">
                  <span className="userEmail">Gender</span>
                  <div>
                    <select
                      className="selectContainer"
                      value={selectGender}
                      onChange={(e) => setSelectGender(e.target.value)}
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
                    <input
                      className="passwordInput regInputField"
                      name="countryState"
                      value={countryState}
                      onChange={(e) => setCountryState(e.target.value)}
                    />
                  </div>
                </div>
                <div className="regInput passForm buyer-edit-input ">
                  <span className="userEmail">City (optional)</span>
                  <div className="passwordContainer editCusInputField">
                    <input
                      className="passwordInput regInputField"
                      name="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="regInput passForm buyer-edit-input ">
                  <span className="userEmail">Postal Code (Optional)</span>
                  <div className="passwordContainer editCusInputField">
                    <input
                      className="passwordInput regInputField"
                      name="postaCode"
                      value={postaCode}
                      onChange={(e) => setPostaCode(e.target.value)}
                    />
                  </div>
                </div>
                <div className="regInput passForm buyer-edit-input ">
                  <span className="userEmail">Street Address</span>
                  <div className="passwordContainer editCusInputField">
                    <input
                      className="passwordInput regInputField"
                      name="streetAddress"
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                    />
                  </div>
                </div>
                <button className="edit-buyer-shipping-btn">
                  <span>Save</span>
                </button>
              </div>
            </div>
            <h3 style={{ color: "green" }}>{success && success}</h3>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default CartBuyerAddress;
