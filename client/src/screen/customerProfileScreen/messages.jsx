import React from 'react'
import MessagesInbox from '../../component/messageInbox'

const Messages = () => {
  return (
    <div className="messageContainer">
        <h1>Messages</h1>
        <p>All your messages </p>
        <MessagesInbox />
        <MessagesInbox />
        <MessagesInbox />
        <MessagesInbox />
        <MessagesInbox />
        <MessagesInbox />
    </div>
  )
}

export default Messages