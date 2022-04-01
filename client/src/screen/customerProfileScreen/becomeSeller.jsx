import customerImg from "../../assets/images/customerImg.jpg";
import React, { useState, useMemo, useEffect, useContext } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from "axios";
import UserContext from "../../provider/userProvider";
import LogOut from "../../component/logOut";

const BecomeSeller = () => {
  const [sellerName, setSellerName] = useState("");
  const [storeName, setStoreName] = useState();
  const [storeAddress, setStoreAddress] = useState("");
  const [storePhone, setstorePhone] = useState("");
  const [country, setCountry] = useState("");
  const [dob, setDob] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [productImg, setProductImg] = useState();
  const [productVideo, setProductVideo] = useState();
  const [businessImg, setBusinessImg] = useState();
  const [businesVideo, setBusinesVideo] = useState();
  const [certificateImg, setCertificateImg] = useState();
  const [userID, setUserID] = useState();
  const [checkTerms, setCheckTerms] = useState(false);
  const [checkConfirm, setCheckConfirm] = useState(false);
  const [showInformation, setShowInformation] = useState(false);
  const { state, USER } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("userID")) {
      setUserID(JSON.parse(localStorage.getItem("userID")));
    }
  }, []);

  // const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const countryHandler = (country) => {
    setCountry(country);
  };

  const checkTermHandler = () => {
    setCheckTerms(checkTerms);
    console.log({ checkTerms: checkTerms });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("sellerName", sellerName);
    formData.append("storeName", storeName);
    formData.append("storeAddress", storeAddress);
    formData.append("storePhone", storePhone);
    formData.append("country", country);
    formData.append("dob", dob);
    formData.append("city", city);
    formData.append("productIMAGE", productImg);
    formData.append("productVIDEO", productVideo);
    formData.append("businessIMAGE", businessImg);
    formData.append("businessVIDEO", businesVideo);
    formData.append("certificateIMAGE", certificateImg);

    console.log({ sellerName: sellerName });
    console.log({ productIMAGE: productImg });
    try {
      const { data } = await axios.post(
        `/api/auth/seller?userID=${userID}`,
        formData
      );

      // console.log(formData.sellerName);

      setSuccess("Seller Account Successfull, You can now login as a Seller.");

      setTimeout(() => {
        setSuccess("");
        // navigate("/verifyAccount");
      }, 1700);
      console.log(country);
      await USER.saveSeller(data.isSeller);

      LogOut();

      setSellerName("");
      setStoreName("");
      setStoreAddress("");
      setstorePhone("");
      setCountry("");
      setDob("");
      setCity("");
      setProductImg("");
      setProductVideo("");
      setBusinesVideo("");
      setCertificateImg("");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
      setError(error.response.data.error);
      setSellerName("");
      setStoreName("");
      setStoreAddress("");
      setstorePhone("");
      setCountry("");
      setDob("");
      setCity("");
      setProductImg(null);
      setProductVideo(null);
      setBusinesVideo(null);
      setCertificateImg(null);
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
                value={sellerName}
                required
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
                value={country}
                onChange={countryHandler}
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
                filename="productIMAGE"
                type="file"
                // required
                onChange={(e) => setProductImg(e.target.files[0])}
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
              <input
                type="file"
                filename="productVIDEO"
                className="passwordInput regInputField"
                onChange={(e) => setProductVideo(e.target.files[0])}
              />
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
                filename="businessIMAGE"
                onChange={(e) => setBusinessImg(e.target.files[0])}
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
              <input
                type="file"
                filename="businessVIDEO"
                onChange={(e) => setBusinesVideo(e.target.files[0])}
                className="passwordInput regInputField"
              />
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
                filename="certificateIMAGE"
                onChange={(e) => setCertificateImg(e.target.files[0])}
                className="passwordInput regInputField"
              />
            </div>
          </div>
        </div>
        <div className="checkBoxContainer">
          <div className="checkboxRow">
            <input
              type="checkbox"
              id="termsId"
              value={checkTerms}
              onChange={checkTermHandler}
            />{" "}
            &nbsp; &nbsp;
            <label className="checkboxLabel" htmlFor="termsId">
              I agree to the terms and conditions
            </label>
          </div>
          <div className="checkboxRow">
            <input type="checkbox" id="confirmId" value={checkConfirm} /> &nbsp;
            &nbsp;
            <label className="checkboxLabel" htmlFor="confirmId">
              Confirm i am the one making the product not a third
              party/intermediary
            </label>
          </div>
          <div className="checkboxRow">
            <input type="checkbox" id="showId" value={showInformation} /> &nbsp;
            &nbsp;
            <label className="checkboxLabel" htmlFor="showId">
              Show my informations to my customers
            </label>
          </div>
        </div>

        <button className="becomeSellerBtn">Save</button>

        <div className="customerProfileImgContainer"></div>
      </form>
    </div>
  );
};

export default BecomeSeller;
