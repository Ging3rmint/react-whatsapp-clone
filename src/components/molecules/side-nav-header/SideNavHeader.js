import React from "react";

import CircleProfileImg from "../../atoms/circle-profile-img/CircleProfileImg";
import IconButton from "../../atoms/icon-button/IconButton";

const SideNavHeader = ({ imageUrl }) => {
  return (
    <div className='side-nav-header'>
      <CircleProfileImg imageUrl={imageUrl} size={30} />
      <div className='side-nav-header__buttons'>
        <IconButton
          icon='message'
          size={18}
          onPress={() => {
            console.log("click");
          }}
        />
        <IconButton
          icon='dots-horizontal-triple'
          size={18}
          onPress={() => {
            console.log("click");
          }}
        />
      </div>
    </div>
  );
};

export default SideNavHeader;
