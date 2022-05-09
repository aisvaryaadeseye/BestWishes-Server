import React, { useState, useEffect, useContext, useRef } from "react";
import "./style.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import UserContext from "../../provider/userProvider";
// import CustomerLoginAccount from "./customerAccount";
import axios from "axios";

const LoginScreen = () => {
  const { USER, state } = useContext(UserContext);

  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellerPassword, setSellerPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);

  const _isMounted = useRef(true);

  const [showCustomer, setShowCustomer] = useState(true);
  const [showSeller, setShowSeller] = useState(false);

  useEffect(() => {
    return () => {
      // ComponentWillUnmount in Class Component
      _isMounted.current = false;
    };
  }, []);

  // const handleShowCustomer = () => {
  //   setShowSeller(true);
  //   setShowCustomer(false);
  // };

  // const handleShowSller = () => {
  //   setShowCustomer(true);
  //   setShowSeller(false);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password.length < 5) {
      setPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Password must be minimun of 5 characters");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        {
          email,
          password,
        },
        config
      );
      if (_isMounted.current) {
        // Check always mounted component
        // continue treatment of AJAX response... ;
        await USER.updateUserData(data);
        console.log({ loginData: data });
        await USER.updateisSeller(data.user.isSeller);
        await USER.saveSeller(data.user.isSeller);
        // console.log({ checkSeller: data.user.isSeller });

        localStorage.setItem("userID", JSON.stringify(data.user._id));
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("isSeller", data.user.isSeller);
        setSuccess("Success!");
        setTimeout(() => {
          setSuccess("");
          navigate("/");
        }, 1500);
      }
    } catch (error) {
      setError(error.response.data.error);
      setPassword("");
      setEmail("");

      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const handleSubmitSeller = () => {};

  return (
    <div className="loginScreen">
      <div className="loginScreenLeft">
        <div className="loginScreenLeftTextContainer">
          <h1>Welcome Back</h1>
          <p>Login to continue experiencing the</p>
          <p>best of hand-made produce</p>
        </div>
      </div>
      <div className="loginScreenRight">
        <div className="loginScreenRightFormContainer">
          <h1>Login in to your account</h1>
          <div className="loginScreenRole">
            {/* <div className="regNavbar">
              <div className="customerNav">
                <div className="customerNav">Customer Account</div>
                <div
                  className="customerNavUnderline"
                  style={{ display: showCustomer ? "flex" : "none" }}
                ></div>
              </div>
              &nbsp; &nbsp;
              <div className="sellerNav" >
                <div className="sellerNav">Seller Account</div>
                <div
                  className="sellerNavUnderline"
                  style={{ display: showSeller ? "flex" : "none" }}
                ></div>
              </div>
            </div> */}

            {/* ===customer==== */}
            <form
              className="customerLoginAccount"
              style={{ display: showCustomer ? "flex" : "none" }}
              onSubmit={handleSubmit}
            >
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
              <div className="loginScreenCostomerForm passForm">
                <span className="userEmail">Email</span>
                <div className="passwordContainer">
                  <input
                    placeholder="sample@gmail.com"
                    name="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="passwordInput"
                  />
                </div>
              </div>
              <div className="loginScreenCostomerForm passForm">
                <span className="userEmail">Password</span>
                <div className="passwordContainer">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="********"
                    name="Password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="passwordInput"
                  />
                  <i
                    className="fa fa-eye"
                    aria-hidden="true"
                    onClick={() => setShowPass(!showPass)}
                  ></i>
                </div>
              </div>
              <div className="forgotPassContainer">
                <span></span>
                <a href="/forgotPassword">Forgot password ?</a>
              </div>

              <button className="loginBtnContainer">Login</button>
            </form>

            {/*  ======seller============*/}
            {/* <form
              className="customerLoginAccount"
              style={{ display: showSeller ? "flex" : "none" }}
              onSubmit={handleSubmitSeller}
            >
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
              <div className="loginScreenCostomerForm passForm">
                <span className="userEmail">Email/Username</span>
                <div className="passwordContainer">
                  <input
                    placeholder="sample@gmail.com"
                    name="sellerEmail"
                    value={sellerEmail}
                    required
                    onChange={(e) => setSellerEmail(e.target.value)}
                    className="passwordInput"
                  />
                </div>
              </div>
              <div className="loginScreenCostomerForm passForm">
                <span className="userEmail">Password</span>
                <div className="passwordContainer">
                  <input
                    type="password"
                    placeholder="********"
                    name="sellerPassword"
                    value={sellerPassword}
                    required
                    onChange={(e) => setSellerPassword(e.target.value)}
                    className="passwordInput"
                  />
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </div>
              </div>
              <div className="forgotPassContainer">
                <span></span>
                <a href="/forgotPassword">Forgot password ?</a>
              </div>

              <button className="loginBtnContainer">Login</button>
            </form> */}
          </div>
          <div className="dontHaveAccContainer">
            <p>Don't have an account ? </p>

            <a href="/registerScreen/customerRegisterAccount">Sign Up</a>
          </div>
          <div className="termsContainer loginTerms ">
            <p>Terms of use</p>
            <p>Privacy policy</p>
            <p>Help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
