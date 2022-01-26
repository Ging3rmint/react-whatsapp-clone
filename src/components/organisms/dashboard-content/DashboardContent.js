import React from "react";

import ContentHeader from "../../molecules/content-header/ContentHeader";
import ContentFooter from "../../molecules/content-footer/ContentFooter";
import ChatBubble from "../../molecules/chat-bubble/ChatBubble";

const DashboardContent = () => {
  const contentStyle = {
    backgroundImage: 'url("./default-background-img.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const ChatRoom = () => {
    return (
      <>
        <ContentHeader
          imageUrl='/IMG_2654.jpg'
          title='Sample Chat Item &#128513;'
          description='Tom, Jerry, You'
        />
        <div className='dashboard-content__scrollable' style={contentStyle}>
          <ChatBubble userName='Tom' text='Hello!' timeStamp='8.33pm' />
          <ChatBubble userName='Jerry' text='Yo~' timeStamp='8.38pm' />
        </div>
        <ContentFooter />
      </>
    );
  };

  return (
    <div className='dashboard-content'>
      <ChatRoom />
    </div>
  );
};

export default DashboardContent;
