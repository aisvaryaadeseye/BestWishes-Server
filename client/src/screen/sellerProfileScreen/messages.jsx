import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

var navLinks = [
  { link: "seller-message-inbox", text: "Messages" },
  { link: "seller-message-chat", text: "Chat" },
];

const SellerMessages = () => {
  const [messageBg, setMessageBg] = useState(true);
  const [chatBg, setChatBg] = useState(false);

  const handleMessageBg = () => {
    setMessageBg(true);
    setChatBg(false);
  };
  const handleChatBg = () => {
    setMessageBg(false);
    setChatBg(true);
  };
  return (
    <div className="sellerMessages">
      <nav className="sellerMessagesTop">
        <div className="orderNav" onClick={handleMessageBg}>
          <Link to="seller-message-inbox" className="customerNav">
            Message
          </Link>
          <div
            className="orderNavUnderline"
            style={{
              display: messageBg ? "flex" : "none",
            }}
          ></div>
        </div>
        <div className="orderNav" onClick={handleChatBg}>
          <Link to="seller-message-chat" className="customerNav">
            Chat
          </Link>
          <div
            className="orderNavUnderline"
            style={{
              display: chatBg ? "flex" : "none",
            }}
          ></div>
        </div>
      </nav>

      <div className="sellerMessagesBottom">
        <Outlet />
      </div>
    </div>
  );
};

export default SellerMessages;
