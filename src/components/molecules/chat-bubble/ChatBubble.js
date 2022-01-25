import React from "react";

const ChatBubble = ({
  userID,
  userName,
  attachment,
  text,
  timeStamp,
  onContactClick,
}) => {
  return (
    <div className='chat-bubble'>
      <div className='chat-bubble__wrapper'>
        {userName ? (
          <div className='chat-bubble__wrapper--header'>
            <button onClick={onContactClick}>{userName}</button>
          </div>
        ) : (
          ""
        )}
        <div className='chat-bubble__wrapper--content'>
          <p>{text}</p>
          <span>{timeStamp}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
