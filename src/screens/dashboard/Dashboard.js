import React from "react";

//components

//organisms
import SideNav from "../../components/organisms/side-nav/SideNav";
import DashboardContent from "../../components/organisms/dashboard-content/DashboardContent";

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <SideNav />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
