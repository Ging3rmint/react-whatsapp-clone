import React from "react";

import ChatItem from "../../molecules/chat-item/ChatItem";
import SideNavHeader from "../../molecules/side-nav-header/SideNavHeader";
import SideNavSearch from "../../molecules/side-nav-search/SideNavSearch";

const SideNav = (props) => {
  return (
    <div className='side-nav'>
      <SideNavHeader imageUrl='/IMG_2654.jpg' />
      <SideNavSearch placeholder='Search or start a new chat' />
      <div className='side-nav__scrollable'>
        <ChatItem
          imageUrl='/IMG_2654.jpg'
          title='Sample Chat Item &#128513;'
          time='8:38pm'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id nulla in elit imperdiet vestibulum ut faucibus tortor. Nam sed auctor elit. Nulla diam nunc, ornare at pharetra a, finibus non nunc. Suspendisse potenti. Vestibulum pulvinar risus non ipsum fringilla egestas. Vestibulum quis justo a nisi posuere dapibus in congue tortor. Pellentesque non elit aliquam, viverra metus sed, venenatis ante. Aliquam sed ligula nunc. Sed maximus bibendum metus ut imperdiet. Curabitur egestas sapien tincidunt purus lobortis gravida. Aenean suscipit, ipsum ut vestibulum imperdiet, odio odio varius tortor, eu rutrum urna neque ut mauris.'
        />
        <ChatItem
          imageUrl='/IMG_2654.jpg'
          title='Sample Chat Item &#128513;'
          time='8:38pm'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id nulla in elit imperdiet vestibulum ut faucibus tortor. Nam sed auctor elit. Nulla diam nunc, ornare at pharetra a, finibus non nunc. Suspendisse potenti. Vestibulum pulvinar risus non ipsum fringilla egestas. Vestibulum quis justo a nisi posuere dapibus in congue tortor. Pellentesque non elit aliquam, viverra metus sed, venenatis ante. Aliquam sed ligula nunc. Sed maximus bibendum metus ut imperdiet. Curabitur egestas sapien tincidunt purus lobortis gravida. Aenean suscipit, ipsum ut vestibulum imperdiet, odio odio varius tortor, eu rutrum urna neque ut mauris.'
        />
        <ChatItem
          imageUrl='/IMG_2654.jpg'
          title='Sample Chat Item &#128513;'
          time='8:38pm'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id nulla in elit imperdiet vestibulum ut faucibus tortor. Nam sed auctor elit. Nulla diam nunc, ornare at pharetra a, finibus non nunc. Suspendisse potenti. Vestibulum pulvinar risus non ipsum fringilla egestas. Vestibulum quis justo a nisi posuere dapibus in congue tortor. Pellentesque non elit aliquam, viverra metus sed, venenatis ante. Aliquam sed ligula nunc. Sed maximus bibendum metus ut imperdiet. Curabitur egestas sapien tincidunt purus lobortis gravida. Aenean suscipit, ipsum ut vestibulum imperdiet, odio odio varius tortor, eu rutrum urna neque ut mauris.'
        />
        <ChatItem
          imageUrl='/IMG_2654.jpg'
          title='Sample Chat Item &#128513;'
          time='8:38pm'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id nulla in elit imperdiet vestibulum ut faucibus tortor. Nam sed auctor elit. Nulla diam nunc, ornare at pharetra a, finibus non nunc. Suspendisse potenti. Vestibulum pulvinar risus non ipsum fringilla egestas. Vestibulum quis justo a nisi posuere dapibus in congue tortor. Pellentesque non elit aliquam, viverra metus sed, venenatis ante. Aliquam sed ligula nunc. Sed maximus bibendum metus ut imperdiet. Curabitur egestas sapien tincidunt purus lobortis gravida. Aenean suscipit, ipsum ut vestibulum imperdiet, odio odio varius tortor, eu rutrum urna neque ut mauris.'
        />
      </div>
    </div>
  );
};

export default SideNav;
