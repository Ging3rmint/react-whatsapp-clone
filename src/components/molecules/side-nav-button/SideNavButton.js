import React from "react";
import Icon from "../../atoms/icon/Icon";

const SideNavButton = ({ onPress, label }) => {
  return (
    <button className='side-nav-button'>
      <div className='side-nav-button__icon-wrapper'>
        <div>
          +
          <Icon icon='people_alt' size={20} color='white' />
        </div>
      </div>
      <span>{label}</span>
    </button>
  );
};

export default SideNavButton;
