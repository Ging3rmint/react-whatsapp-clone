import React, { useState, useRef } from "react";

import IconButton from "../../atoms/icon-button/IconButton";
import SideNavButton from "../../molecules/side-nav-button/SideNavButton";
import SideNavSearch from "../../molecules/side-nav-search/SideNavSearch";

const ContactSideDrawer = ({ onToggleDrawerHandler, isActive }) => {
  return (
    <div className={`contact-side-drawer ${isActive ? "active" : ""}`}>
      <div className='contact-side-drawer__header'>
        <div className='contact-side-drawer__header--item'>
          <IconButton
            icon='arrow-left2'
            size={18}
            color='#f4f4f4'
            onPress={onToggleDrawerHandler}
          />
          Contact
        </div>
      </div>
      <SideNavSearch placeholder='Search contacts' />
      <SideNavButton label='New Group' />
    </div>
  );
};

export default ContactSideDrawer;
