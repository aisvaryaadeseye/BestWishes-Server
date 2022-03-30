import customerImg from "../../assets/images/customerImg.jpg";
import React, { useState, useMemo, useEffect } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from "axios";

const BecomeSeller = () => {
  const [sellerName, setSellerName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [storeAddress, setStoreAddress] = useState();
  const [storePhone, setstorePhone] = useState();
  const [country, setCountry] = useState();
  const [dob, setDob] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const [userID, setUserID] = useState();

  //   const [GenderState, setGenderState] = "Male";

  useEffect(() => {
    if (localStorage.getItem("userID")) {
      setUserID(localStorage.getItem("userID"));
    }
    // return () => {
    //   console.log("cleaned up");
    // };
  }, []);

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`/api/auth/seller?userID=${userID}`, {
        sellerName,
        storeName,
        storeAddress,
        storePhone,
      });
      setSuccess("Seller Account Successfull");
      //   localStorage.setItem("userId", data._id);
      //   setTimeout(() => {
      //     setSuccess("");
      //     navigate("/verifyAccount");
      //   }, 1500);

      //   setSellerName("");
      //   setPassword("");
      //   setEmail("");
      //   setPhone("");
    } catch (error) {
      setError(error.response.data.error);
      //   setSellerName("");
      //   setPassword("");
      //   setEmail("");
      //   setPhone("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="becomeSellerContainer">
      <h1>Become A Seller</h1>
      {error && (
        <div className="regErrorContainer">
          <span style={{ color: "#f69014" }}> {error}</span>
        </div>
      )}
      {success && (
        <div className="regSuccessContainer">
          <span style={{ color: "#00b533" }}> {success}</span>
        </div>
      )}

      <form className=" becomeSellerFormContainer" onSubmit={handleSubmit}>
        <div className="registerInputContainer customerEditInput">
          <div className="regInput passForm ">
            <span className="userEmail">Owner's Full name (Required)</span>
            <div className="passwordContainer editCusInputField">
              <input
                placeholder="your name"
                // name="sellerName"
                value={sellerName}
                // required
                onChange={(e) => setSellerName(e.target.value)}
                className="passwordInput regInputField"
              />
            </div>
          </div>
          <div className="regInput passForm ">
            <span className="userEmail">Store Name (required)</span>
            <div className="passwordContainer editCusInputField">
              <input
                placeholder=""
                required
                name="storeName"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="passwordInput regInputField"
              />
            </div>
          </div>
        </div>
        <div className="registerInputContainer customerEditInput">
          <div className="regInput passForm ">
            <span className="userEmail">Store Address (Required)</span>
            <div className="passwordContainer editCusInputField">
              <input
                required
                placeholder=""
                name="storeAddress"
                value={storeAddress}
                onChange={(e) => setStoreAddress(e.target.value)}
                className="passwordInput regInputField"
              />
            </div>
          </div>
          <div className="regInput passForm ">
            <span className="userEmail">Store Phone Number (Required)</span>
            <div className="passwordContainer editCusInputField">
              <input
                type="text"
                required
                placeholder=""
                name="storePhone"
                value={storePhone}
                onChange={(e) => setstorePhone(e.target.value)}
                className="passwordInput regInputField"
              />
            </div>
          </div>
        </div>
        <div className="registerInputContainer customerEditInput">
          <div className="regInput passForm ">
            <span className="userEmail">Country</span>
            <div className="countrySelectContainer">
              <Select
                className="countrySelect"
                options={options}
                value={value}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="regInput passForm ">
            <span className="userEmail">Date of birth (Optional)</span>
            <div className="passwordContainer editCusInputField">
              <input
                type="date"
                name="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="passwordInput regInputField"
              />
            </div>
          </div>
        </div>

        <div className="registerInputContainer customerEditInput">
          <div className="regInput passForm ">
            <span className="userEmail">City/State (Require)</span>
            <div className="passwordContainer editCusInputField">
              <input
                placeholder=""
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="passwordInput regInputField"
              />
            </div>
          </div>
          <div className="regInput passForm">
            <span className="userEmail">
              Images of business location (Required)
            </span>
            <div className="passwordContainer">
              <input
                type="file"
                // required
                className="passwordInput regInputField"
              />
            </div>
          </div>
        </div>
        <div className="registerInputContainer customerEditInput">
          <div className="regInput passForm">
            <span className="userEmail">
              Video of business location (Optional)
            </span>
            <div className="passwordContainer">
              <input type="file" className="passwordInput regInputField" />
            </div>
          </div>
          <div className="regInput passForm">
            <span className="userEmail">
              Images of product making (Required)
            </span>
            <div className="passwordContainer">
              <input
                type="file"
                // required
                className="passwordInput regInputField"
              />
            </div>
          </div>
        </div>
        <div className="registerInputContainer customerEditInput">
          <div className="regInput passForm">
            <span className="userEmail">
              Video of product making (Optional)
            </span>
            <div className="passwordContainer">
              <input type="file" className="passwordInput regInputField" />
            </div>
          </div>
          <div className="regInput passForm">
            <span className="userEmail">
              Business registeration certificate
            </span>
            <div className="passwordContainer">
              <input
                type="file"
                // required
                className="passwordInput regInputField"
              />
            </div>
          </div>
        </div>

        <button className="becomeSellerBtn">Save</button>

        <div className="customerProfileImgContainer"></div>
      </form>
    </div>
  );
};

export default BecomeSeller;
