import customerImg from "../../assets/images/customerImg.jpg";
import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
const EditCustomerProfile = () => {
  const [fullName, setFullName] = useState();

  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [dob, setDob] = useState();
  const [gender, setGender] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [postaCode, setPostaCode] = useState();
  const [streetAdreess, setStreetAdreess] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const [GenderState, setGenderState] = "Male";

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div className="editCustomerProfile">
      <h1>Edit profile</h1>
      <p>
        The information will be used as your shipping details when you make a
        order
      </p>

      <div className="editCustomerFormContainer">
        <div className="editCustomerImgContainer">
          <i className="fa fa-camera faCamera" aria-hidden="true"></i>
          <label htmlFor="editCustomerImg">
            <img
              src={customerImg}
              alt=""
              className="customerProfileImg editCustomerPic"
            />
            <input
              type="file"
              id="editCustomerImg"
              style={{ display: "none" }}
            />
          </label>
        </div>
        <div className="registerInputContainer customerEditInput">
          <div className="regInput passForm ">
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
          <div className="regInput passForm ">
            <span className="userEmail">Email</span>
            <div className="passwordContainer editCusInputField">
              <input
                placeholder="sample@gmail.com"
                // name="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="passwordInput regInputField"
              />
            </div>
          </div>
        </div>
        <div className="registerInputContainer customerEditInput">
          <div className="regInput passForm ">
            <span className="userEmail">Phone number</span>
            <div className="passwordContainer editCusInputField">
              <input
                placeholder="+358 909 345"
                // name="fullName"
                // value={fullName}

                // onChange={(e) => setFullName(e.target.value)}
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
                // value={email}
                //
                // onChange={(e) => setEmail(e.target.value)}
                className="passwordInput regInputField"
              />
            </div>
          </div>
        </div>
        <div className="registerInputContainer customerEditInput">
          <div className="regInput passForm ">
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
        </div>
        <div className="registerInputContainer customerEditInput">
          <div className="regInput passForm ">
            <span className="userEmail">State</span>
            <div className="passwordContainer editCusInputField">
              <input
                // placeholder="Helski"
                // name="fullName"
                // value={fullName}
                // onChange={(e) => setFullName(e.target.value)}
                className="passwordInput regInputField"
              />
            </div>
          </div>
          <div className="regInput passForm ">
            <span className="userEmail">City (optional)</span>
            <div className="passwordContainer editCusInputField">
              <input className="passwordInput regInputField" />
            </div>
          </div>
        </div>
        <div className="registerInputContainer customerEditInput">
          <div className="regInput passForm ">
            <span className="userEmail">Postal Code (Optional)</span>
            <div className="passwordContainer editCusInputField">
              <input className="passwordInput regInputField" />
            </div>
          </div>
          <div className="regInput passForm ">
            <span className="userEmail">State Address</span>
            <div className="passwordContainer editCusInputField">
              <input className="passwordInput regInputField" />
            </div>
          </div>
        </div>
        <button className="editCustomerBtn">Save</button>

        <div className="customerProfileImgContainer"></div>
      </div>
    </div>
  );
};

export default EditCustomerProfile;
