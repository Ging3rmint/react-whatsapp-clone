import React from 'react';

const CircleProfileImg = ({imageUrl, size}) => {
  return <div className={`circle-profile-img ${size}`}>
      <img src={imageUrl} alt='User icon'/>
  </div>;
};

export default CircleProfileImg;
