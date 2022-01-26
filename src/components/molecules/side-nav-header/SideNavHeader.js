import React from "react";

import CircleProfileImg from "../../atoms/circle-profile-img/CircleProfileImg";
import IconButton from "../../atoms/icon-button/IconButton";

const SideNavHeader = ({ imageUrl, onProfileClick, onContactClick }) => {
  return (
    <div className='side-nav-header'>
      <CircleProfileImg
        imageUrl={imageUrl}
        size={30}
        onPress={onProfileClick}
      />
      <div className='side-nav-header__buttons'>
        <IconButton
          icon='profile'
          size={18}
          color='#444'
          onPress={onContactClick}
        />
        {/* <IconButton
          icon='dots-horizontal-triple'
          size={18}
          color='#444'
          onPress={() => {
            console.log("click");
          }}
        /> */}
      </div>
    </div>
  );
};

export default SideNavHeader;
