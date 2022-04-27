import React from "react";
import "./style.css";
import chatImg from "../../assets/images/chatImg.svg";

const ChatDetail = () => {
  return (
    <div className="chatDetailContainer">
      <div className="chatDetail">
        <div className="chatDetailLeft">
          <div className="chatDetailImgContainer">
            <img src={chatImg} alt="" className="chatDetailImg" />
          </div>
        </div>
        <div className="chatDetailRight">
          <div className="chatDetailRightTop">
            <span>Maren Rosser</span>
            <span>12/02/22</span>
          </div>
          <div className="chatDetailRightBottom">
            <span>Lorem ipsum dolor, sit amet consectetur</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ChatDetail;
