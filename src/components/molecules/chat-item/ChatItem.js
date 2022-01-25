import React from "react";

import CircleProfileImg from "../../atoms/circle-profile-img/CircleProfileImg";

const ChatItem = ({ id, imageUrl, title, time, description, imageSize }) => {
  return (
    <div className='chat-item'>
      <div className='chat-item__left'>
        <CircleProfileImg imageUrl={imageUrl} size={imageSize} />
      </div>
      <div className='chat-item__right'>
        <div className='chat-item__right--header'>
          <h2>{title}</h2>
          {time ? <span>{time}</span> : ""}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChatItem;
