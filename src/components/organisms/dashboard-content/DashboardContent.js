import React from "react";

import ContentHeader from "../../molecules/content-header/ContentHeader";
import ContentFooter from "../../molecules/content-footer/ContentFooter";

const DashboardContent = () => {
  const contentStyle = {
    backgroundImage: 'url("./default-background-img.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className='dashboard-content'>
      <ContentHeader
        imageUrl='/IMG_2654.jpg'
        title='Sample Chat Item &#128513;'
        description='Tom, Jerry, You'
      />
      <div className='dashboard-content__scrollable' style={contentStyle}></div>
      <ContentFooter />
    </div>
  );
};

export default DashboardContent;
