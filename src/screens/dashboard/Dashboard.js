import React, { useState } from "react";

//components

//organisms
import SideNav from "../../components/organisms/side-nav/SideNav";
import DashboardContent from "../../components/organisms/dashboard-content/DashboardContent";
import ProfileSideDrawer from "../../components/organisms/profile-side-drawer/ProfileSideDrawer";
import ContactSideDrawer from "../../components/organisms/contact-side-drawer/ContactSideDrawer";

const Dashboard = () => {
  const [profileDrawerActive, setProfileDrawerActive] = useState(false);
  const [contactDrawerActive, setContactDrawerActive] = useState(false);

  const onToggleProfileDrawerHandler = () => {
    setProfileDrawerActive((prevState) => !prevState);
  };

  const onToggleContactDrawerHandler = () => {
    setContactDrawerActive((prevState) => !prevState);
  };

  return (
    <div className='dashboard'>
      <SideNav
        onToggleProfileDrawerHandler={onToggleProfileDrawerHandler}
        onToggleContactDrawerHandler={onToggleContactDrawerHandler}
      />
      <ProfileSideDrawer
        isActive={profileDrawerActive}
        onToggleDrawerHandler={onToggleProfileDrawerHandler}
      />
      <ContactSideDrawer
        isActive={contactDrawerActive}
        onToggleDrawerHandler={onToggleContactDrawerHandler}
      />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
