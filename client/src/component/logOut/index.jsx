// import React from "react";

const LogOut = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
  localStorage.removeItem("userID");
  localStorage.removeItem("isSeller");
  window.location.reload();
};

export default LogOut;
