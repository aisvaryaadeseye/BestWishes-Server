import customerImg from "../../assets/images/customerImg.jpg";
import React, { useState, useMemo, useEffect, useContext } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import axiox from "axios";
import axios from "axios";
import UserContext from "../../provider/userProvider";
import { useIsMounted } from "../../component/isMounted";

const EditCustomerProfile = ({ showDescription }) => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [dob, setDob] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState("");
  const [countryState, setCountryState] = useState();
  const [postalCode, setPostalCode] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [userId, setUserId] = useState("");
  const [selectGender, setSelectGender] = useState("Male");
  const [profileImg, setProfileImg] = useState();
  const { state, USER } = useContext(UserContext);
  const isMounted = useIsMounted();
  const options = useMemo(() => countryList().getData(), []);

  useEffect(async () => {
    if (localStorage.getItem("userID")) {
      setUserId(localStorage.getItem("userID"));
    }

    // if (isMounted.current) {
    const getDta = await axios
      .get(`/api/auth/get-user?userID=${state?.user?.user?._id}`)
      .then((res) => [
        setFullName(res.data.user?.fullName),
        setEmail(res.data.user?.email),
        setPhone(res.data.user?.phone),
        setDob(res.data.user?.dob),
        setSelectGender(res.data.user?.selectGender),
        setCountry(res.data.user?.country),
        setCountryState(res.data.user?.countryState),
        setStreetAddress(res.data.user?.streetAddress),
        setCity(res.data.user?.city),
        setPostalCode(res.data.user?.postalCode),
        setProfileImg(res.data.user?.profileIMAGE),
        USER.updateUserData(res.data),
        // console.log({ res: res.user?.data }),
        // console.log({ fullname: res.data.user?.fullName }),
      ])
      .catch((err) => console.log(err));
    // }

    return () => clearInterval(getDta);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("country", country);
      formData.append("countryState", countryState);
      formData.append("streetAddress", streetAddress);
      formData.append("city", city);
      formData.append("postalCode", postalCode);
      formData.append("dob", dob);
      formData.append("selectGender", selectGender);
      formData.append("profileIMAGE", profileImg);

      const { data } = axios.put(
        `/api/auth/update-data?token=${state?.token}`,
        formData
      );
      // await USER.updateUserData(data);
      // console.log({ profileImg: profileImg });
      console.log("Success");
      // if (isMounted.current) {

      setSuccess("Success!");
      setTimeout(() => {
        setSuccess("");
        // setOpen(false);
      }, 1500);
      // }
    } catch (error) {
      console.log(error + "error saving");
    }
  }

  function GetProfileImg() {
    const [profileImgRes, setProfileImgRes] = React.useState("");

    function profileImgUploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setProfileImgRes(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }

    return { profileImgRes, profileImgUploader };
  }
  const { profileImgRes, profileImgUploader } = GetProfileImg();
  return (
    <div className="editCustomerProfile">
      <h1>Edit profile</h1>
      <p>
        {showDescription
          ? " The information will be used as your shipping details when you make aorder"
          : ""}
      </p>

      <form className="editCustomerFormContainer" onSubmit={handleSubmit}>
        <div className="editCustomerImgContainer">
          <i className="fa fa-camera faCamera" aria-hidden="true"></i>
          <label htmlFor="editCustomerImg">
            <img
              src={profileImgRes ? profileImgRes : profileImg}
              alt=""
              className="customerProfileImg editCustomerPic"
            />
            <input
              filename="profileIMAGE"
              onChange={(e) => {
                setProfileImg(e.target.files[0]);
                profileImgUploader(e);
              }}
              type="file"
              id="editCustomerImg"
              style={{ display: "none" }}
            />
          </label>
        </div>
        <span style={{ color: "green" }}>{success && success}</span>
        <div className="editCustomerContainer ">
          <div className="regInput passForm  ">
            <span className="userEmail">Full name</span>
            <div className="passwordContainer editCusInputField">
              <input
                value={fullName ?? ""}
                onChange={(e) => setFullName(e.target.value)}
                className="passwordInput regInputField"
              />
            </div>
          </div>
          <div className="regInput passForm ">
            <span className="userEmail">Email</span>
            <div className="passwordContainer editCusInputField">
              <input
                placeholder="sample@gmail.com"
                // name="email"
                value={email ?? ""}
                onChange={(e) => setEmail(e.target.value)}
                className="passwordInput regInputField"
              />
            </div>
          </div>
        </div>
        <div className="editCustomerContainer ">
          <div className="regInput passForm ">
            <span className="userEmail">Phone number</span>
            <div className="passwordContainer editCusInputField">
              <input
                placeholder="+358 909 345"
                // name="fullName"
                value={phone ?? ""}
                onChange={(e) => setPhone(e.target.value)}
                className="passwordInput regInputField"
              />
            </div>
          </div>
          <div className="regInput passForm ">
            <span className="userEmail">Date of birth (optional)</span>
            <div className="passwordContainer editCusInputField">
              <input
                type="date"
                // placeholder="sample@gmail.com"
                // name="email"
                value={dob ?? ""}
                onChange={(e) => setDob(e.target.value)}
                className="passwordInput regInputField"
              />
            </div>
          </div>
        </div>
        <div className="editCustomerContainer ">
          <div className="regInput passForm ">
            <span className="userEmail">Gender</span>
            <div>
              <select
                className="selectContainer"
                value={selectGender ?? ""}
                onChange={(e) => setSelectGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="regInput passForm ">
            <span className="userEmail">Country</span>
            <div className="passwordContainer editCusInputField">
              <input
                className="passwordInput regInputField"
                value={country ?? ""}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
          {/* <div className="regInput passForm ">
            <span className="userEmail">Country</span>
            <div className="countrySelectContainer">
              <input
                className="passwordInput regInputField"
                // options={options}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div> */}
        </div>
        <div className="editCustomerContainer ">
          <div className="regInput passForm ">
            <span className="userEmail">State</span>
            <div className="passwordContainer editCusInputField">
              <input
                value={countryState ?? ""}
                onChange={(e) => setCountryState(e.target.value)}
                className="passwordInput regInputField"
              />
            </div>
          </div>

          <div className="regInput passForm ">
            <span className="userEmail">City (optional)</span>
            <div className="passwordContainer editCusInputField">
              <input
                className="passwordInput regInputField"
                value={city ?? ""}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="editCustomerContainer ">
          <div className="regInput passForm ">
            <span className="userEmail">Postal Code (Optional)</span>
            <div className="passwordContainer editCusInputField">
              <input
                className="passwordInput regInputField"
                value={postalCode ?? ""}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
          </div>
          <div className="regInput passForm ">
            <span className="userEmail">Street Address</span>
            <div className="passwordContainer editCusInputField">
              <input
                className="passwordInput regInputField"
                value={streetAddress ?? ""}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button className="editCustomerBtn">Save</button>
      </form>
    </div>
  );
};

export default EditCustomerProfile;
