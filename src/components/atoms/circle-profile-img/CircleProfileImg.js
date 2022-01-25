import React from "react";

const CircleProfileImg = ({ imageUrl, size }) => {
  return (
    <div style={{ width: size, height: size }} className={`circle-profile-img`}>
      <img src={imageUrl} alt='User icon' />
    </div>
  );
};

export default CircleProfileImg;
