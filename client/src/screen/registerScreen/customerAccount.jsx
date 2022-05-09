import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import spinnerLoading from "../../assets/icons/spinnerLoading.gif";
const CustomerRegisterAccount = () => {
  let navigate = useNavigate();

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password.length < 6) {
      setPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      setFullName("");
      setPassword("");
      setEmail("");
      setPhone("");
      return setError("Password must be minimun of 6 characters");
    }
    var regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!regx.test(password)) {
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError(
        "Password must contain at least a uppercase, a number and a special character"
      );
    }

    try {
      const { data } = await axios.post("/api/auth/register", {
        fullName,
        email,
        phone,
        password,
      });
      setSuccess("Registeration Successfull");
      localStorage.setItem("userId", data._id);
      setIsLoading(false);
      setTimeout(() => {
        setSuccess("");
        navigate("/verifyAccount");
      }, 1500);

      setFullName("");
      setPassword("");
      setEmail("");
      setPhone("");
    } catch (error) {
      setError(error.response.data.error);
      setFullName("");
      setPassword("");
      setEmail("");
      setPhone("");
      setIsLoading(false);
      setTimeout(() => {
        setError("");
      }, 5000);
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="createAccountCustomer" onSubmit={handleSubmit}>
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

        <div className="registerInputContainer">
          <div className="regInput passForm">
            <span className="userEmail">Full name</span>
            <div className="passwordContainer">
              <input
                placeholder="your name"
                name="fullName"
                value={fullName}
                required
                onChange={(e) => setFullName(e.target.value)}
                className="passwordInput regInputField"
              />
            </div>
          </div>
          <div className="regInput passForm">
            <span className="userEmail">Email</span>
            <div className="passwordContainer">
              <input
                placeholder="sample@gmail.com"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="passwordInput regInputField"
              />
            </div>
          </div>
        </div>
        <div className="registerInputContainer">
          <div className="regInput passForm">
            <span className="userEmail">Phone number</span>
            <div className="passwordContainer">
              <input
                name="phone"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
                className="passwordInput regInputField"
              />
            </div>
          </div>
          <div className="regInput passForm">
            <span className="userEmail">Password</span>
            <div className="passwordContainer">
              <input
                type={showPass ? "text" : "password"}
                placeholder="********"
                name="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="passwordInput regInputField"
              />
              <i
                className="fa fa-eye"
                aria-hidden="true"
                onClick={() => setShowPass(!showPass)}
              ></i>
            </div>
          </div>
        </div>
        <button className="signupBtnContainer">
          {isLoading ? (
            <img src={spinnerLoading} alt="" className="sign-up-spinner" />
          ) : (
            <span>Sign up</span>
          )}{" "}
        </button>

        <div className="alreadyAccountContainer">
          <p>Already have an accoint ? </p>
          <p>
            <a href="/loginScreen">Login</a>
          </p>
        </div>
        <div className="orCreateAccount">
          <hr className="RegDivider" />
          <p>Or Create Account with</p>
          <hr className="RegDivider" />
        </div>
        <div className="sigupWithGoogleContainer">
          <span>
            <i className="fab fa-google fa-3x"></i>
            Sign up with google
          </span>
        </div>
        <div className="sigupWithFacebookContainer">
          <span>
            <i className="fa-brands fa-facebook"></i>
            Sign up with facebook
          </span>
        </div>
        <div className="termsContainer regTermsContainer">
          <p>Terms of use</p>
          <p>Privacy policy</p>
          <p>Help</p>
        </div>
      </form>
    </>
  );
};

export default CustomerRegisterAccount;
