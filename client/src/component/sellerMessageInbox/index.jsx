import React from "react";
import MessagesInbox from "../messageInbox";
import "./style.css";

const SellerMessageInbox = () => {
  return (
    <div className="sellerMessageInbox">
      <MessagesInbox />
      <MessagesInbox />
      <MessagesInbox />
      <MessagesInbox />
      <MessagesInbox />
      <MessagesInbox />
      <MessagesInbox />
    </div>
  );
};

export default SellerMessageInbox;
