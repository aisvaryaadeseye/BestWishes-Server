import React from "react";
import ChatDetail from "../chatDetail";
import "./style.css";
import chatImg from "../../assets/images/chatImg.svg";
import FriendChatBox from "../chatBox/friendChatBox";
import UserChatBox from "../chatBox/userChatBox";
import sendIcon from "../../assets/icons/sendIcon.svg";

const SellerMessageChat = () => {
  return (
    <div className="sellerMessageChat">
      <div className="sellerMessageChatLeft">
        <div className="sellerMessageChatLeftTop">
          <div className="sellerMessageChatSearchContainer">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <hr />
        <div className="sellerMessageChatLeftBottom">
          <ChatDetail />
          <ChatDetail />
          <ChatDetail />
          <ChatDetail />
          <ChatDetail />
          <ChatDetail />
          <ChatDetail />
          <ChatDetail />
          <ChatDetail />
          <ChatDetail />
          <ChatDetail />
        </div>
      </div>
      <div className="sellerMessageChatRight">
        <div className="sellerMessageChatRightTop">
          <div className="sellerMessageChatRightTopLeft">
            <div className="sellerMessageChatRightTopLeftImgContainer">
              <img
                src={chatImg}
                alt=""
                className="sellerMessageChatRightTopLeftImg"
              />
            </div>
            <div className="sellerMessageChatRightTopLeftTextContainer">
              <h3>Kiarra Bator</h3>
              <span>30 min ago</span>
            </div>
          </div>
          <div className="sellerMessageChatRightTopRight">
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
        </div>
        <hr />
        <div className="sellerMessageChatRightMiddle">
          <FriendChatBox />
          <UserChatBox />
          <UserChatBox />
          <FriendChatBox />
          <UserChatBox />
          <UserChatBox />
          <FriendChatBox />
          <UserChatBox />
          <UserChatBox />
        </div>
        <div className="sellerMessageChatRightBottom">
          <textarea
            placeholder="Type your message..."
            cols="50"
            rows="3"
          ></textarea>
          <img src={sendIcon} alt="" className="sendIcon" />
        </div>
      </div>
    </div>
  );
};

export default SellerMessageChat;
