import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SellerLoginAccount = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

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
      //   console.log({ data: data });
      // console.log({ fullName: data.user.fullName })

      localStorage.setItem("authToken", data.token);
      //   localStorage.setItem("currentUser", data.user.fullName);
      setSuccess("Success!");
      setTimeout(() => {
        setSuccess("");
        navigate("/");
      }, 1500);
    } catch (error) {
      setError(error.response.data.error);
      setPassword("");
      setEmail("");

      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      <form className="sellerLoginAccount" onSubmit={handleSubmit}>
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
              type="password"
              placeholder="********"
              name="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
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
      </form>
    </>
  );
};

export default SellerLoginAccount;
