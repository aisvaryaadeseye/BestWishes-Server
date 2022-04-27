import React from "react";
import "./style.css";
import chatImg from "../../assets/images/chatImg.svg";

const RecentCustomer = () => {
  return (
    <div className="recent-customer">
      <div className="recent-customer-left">
        <div className="recent-customer-img-container">
          <img src={chatImg} alt="" className="recent-customer-img" />
        </div>
      </div>
      <div className="recent-customer-right">
        <span>Jocelyn Workman</span>
        <span>Jocelyn.workman@gmail.com</span>
      </div>
    </div>
  );
};

export default RecentCustomer;
