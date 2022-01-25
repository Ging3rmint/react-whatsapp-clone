import React from "react";
import IconButton from "../../atoms/icon-button/IconButton";
import ChatItem from "../chat-item/ChatItem";

const ContentHeader = ({ imageUrl, title, description }) => {
  return (
    <div className='content-header'>
      <ChatItem
        imageUrl={imageUrl}
        title={title}
        description={description}
        imageSize={30}
      />
      <div className='content-header__buttons'>
        <IconButton
          icon='search'
          size={18}
          color='#444'
          onPress={() => {
            console.log("click");
          }}
        />
        <IconButton
          icon='dots-horizontal-triple'
          size={18}
          color='#444'
          onPress={() => {
            console.log("click");
          }}
        />
      </div>
    </div>
  );
};

export default ContentHeader;
