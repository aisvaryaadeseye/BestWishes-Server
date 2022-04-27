import { useNavigate, Link } from "react-router-dom";

const LogOut = () => {
  // const naviage = useNavigate();
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
  localStorage.removeItem("userID");
  localStorage.removeItem("isSeller");
  // localStorage.removeItem("sellerData");
  localStorage.removeItem("saveSeller");
  // naviage("/");

  window.location.reload();
};

export default LogOut;
