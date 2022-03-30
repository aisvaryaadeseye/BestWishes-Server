import React, { useState } from "react";

const BecomeAseller = () => {
  const [sellerName, setSellerName] = useState("");

  const [sellerCheckBoxList, setSellerCheckboxList] = useState({
    // selectedCheckbox: [],
    response: [],
  });

  //use to select the seller check list
  const handleSellerChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { selectedCheckbox } = sellerCheckBoxList;

    if (checked) {
      setSellerCheckboxList({
        // selectedCheckbox: [...selectedCheckbox, value],
        response: [...selectedCheckbox, value],
      });
    } else {
      setSellerCheckboxList({
        // selectedCheckbox: selectedCheckbox.filter((e) => e !== value),
        response: selectedCheckbox.filter((e) => e !== value),
      });
    }
  };

  return (
    <div className="createAccountSeller">
      <div className="registerInputContainer">
        <div className="regInput passForm">
          <span className="userEmail">Ower's Fullname (Required)</span>
          <div className="passwordContainer">
            <input
              type="text"
              required
              value={sellerName}
              onChange={(e) => setSellerName(e.target.value)}
              className="passwordInput regInputField"
            />
          </div>
        </div>
        <div className="regInput passForm">
          <span className="userEmail">Store Name (Required)</span>
          <div className="passwordContainer">
            <input
              type="text"
              required
              className="passwordInput regInputField"
            />
          </div>
        </div>
      </div>
      <div className="registerInputContainer">
        <div className="regInput passForm">
          <span className="userEmail">Store Address (Required)</span>
          <div className="passwordContainer">
            <input
              type="text"
              required
              className="passwordInput regInputField"
            />
          </div>
        </div>
        <div className="regInput passForm">
          <span className="userEmail">Store Phone number (Required)</span>
          <div className="passwordContainer">
            <input
              type="text"
              required
              className="passwordInput regInputField"
            />
          </div>
        </div>
      </div>
      <div className="registerInputContainer">
        <div className="regInput passForm">
          <span className="userEmail">Store Address (Required)</span>
          <div className="passwordContainer">
            <input
              type="text"
              required
              className="passwordInput regInputField"
            />
          </div>
        </div>
        <div className="regInput passForm">
          <span className="userEmail">Store Phone number (Required)</span>
          <div className="passwordContainer">
            <input
              type="text"
              required
              className="passwordInput regInputField"
            />
          </div>
        </div>
      </div>
      <div className="registerInputContainer">
        <div className="regInput passForm">
          <span className="userEmail">Store Address (Required)</span>
          <div className="passwordContainer">
            <input
              type="text"
              required
              className="passwordInput regInputField"
            />
          </div>
        </div>
        <div className="regInput passForm">
          <span className="userEmail">Date of birth (Optional)</span>
          <div className="passwordContainer">
            <input type="date" className="passwordInput regInputField" />
          </div>
        </div>
      </div>
      <div className="registerInputContainer">
        <div className="regInput passForm">
          <span className="userEmail">Country (Required)</span>
          <div className="passwordContainer">
            <input
              type="text"
              required
              className="passwordInput regInputField"
            />
          </div>
        </div>
        <div className="regInput passForm">
          <span className="userEmail">City/State (Required)</span>
          <div className="passwordContainer">
            <input
              type="text"
              required
              className="passwordInput regInputField"
            />
          </div>
        </div>
      </div>
      <div className="registerInputContainer">
        <div className="regInput passForm">
          <span className="userEmail">
            Image of business location (Required)
          </span>
          <div className="passwordContainer">
            <input
              type="file"
              required
              className="passwordInput regInputField"
            />
          </div>
        </div>
        <div className="regInput passForm">
          <span className="userEmail">
            Video of business location (Optional)
          </span>
          <div className="passwordContainer">
            <input
              type="file"
              required
              className="passwordInput regInputField"
            />
          </div>
        </div>
      </div>
      <div className="registerInputContainer">
        <div className="regInput passForm">
          <span className="userEmail">
            Business registration certificate (Optional)
          </span>
          <div className="passwordContainer">
            <input
              type="file"
              required
              className="passwordInput regInputField"
            />
          </div>
        </div>
        <div className="regInput passForm"></div>
      </div>

      <div className="sellerCheckBoxContainer">
        <form>
          <div className="checkboxRow">
            <input
              type="checkbox"
              id="termsId"
              value="terms"
              onChange={handleSellerChange}
            />{" "}
            &nbsp; &nbsp;
            <label className="checkboxLabel" htmlFor="termsId">
              I agree to the terms and conditions
            </label>
          </div>
          <div className="checkboxRow">
            <input
              type="checkbox"
              id="confirmId"
              value="confirm"
              onChange={handleSellerChange}
            />{" "}
            &nbsp; &nbsp;
            <label className="checkboxLabel" htmlFor="confirmId">
              Confirm i am the one making the product not a third
              party/intermediary
            </label>
          </div>
          <div className="checkboxRow">
            <input
              type="checkbox"
              id="showId"
              value="show"
              onChange={handleSellerChange}
            />{" "}
            &nbsp; &nbsp;
            <label className="checkboxLabel" htmlFor="showId">
              Show my informations to my customers
            </label>
          </div>
        </form>
      </div>

      <div className="signupBtnContainer">
        <button>Register</button>
      </div>

      <div className="termsContainer regTermsContainer sellerRegBtn">
        <p>Terms of use</p>
        <p>Privacy policy</p>
        <p>Help</p>
      </div>
    </div>
  );
};

export default BecomeAseller;
