import React, { useState } from "react";

const CircleProfileImg = ({ imageUrl, size, poster, onPress }) => {
  const [isPosterVisible, setPosterVisible] = useState(false);

  const Poster = () => {
    return <div className='poster'>{poster}</div>;
  };

  return (
    <div
      style={{ width: size, height: size }}
      className={`circle-profile-img ${onPress ? "clickable" : ""}`}
      onMouseEnter={() => setPosterVisible(true)}
      onMouseLeave={() => setPosterVisible(false)}
      onClick={onPress}
    >
      <img src={imageUrl} alt='User icon' />
      {poster && isPosterVisible ? <Poster /> : ""}
    </div>
  );
};

export default CircleProfileImg;
