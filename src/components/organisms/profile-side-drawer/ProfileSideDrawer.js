import React, { useState, useRef } from "react";
import CircleProfileImg from "../../atoms/circle-profile-img/CircleProfileImg";
import IconButton from "../../atoms/icon-button/IconButton";
import Icon from "../../atoms/icon/Icon";
import InputField from "../../molecules/input-field/InputField";

const ProfileSideDrawer = ({ onToggleDrawerHandler, isActive }) => {
  const Poster = () => {
    return (
      <div className='image-poster'>
        <div className='image-poster__wrapper'>
          <Icon icon='camera' size={18} color='#f4f4f4' />
          <p>Change Profile Photo</p>
        </div>
      </div>
    );
  };

  return (
    <div className={`profile-side-drawer ${isActive ? "active" : ""}`}>
      <div className='profile-side-drawer__header'>
        <div className='profile-side-drawer__header--item'>
          <IconButton
            icon='arrow-left2'
            size={18}
            color='#f4f4f4'
            onPress={onToggleDrawerHandler}
          />
          Profile
        </div>
      </div>
      <div className='profile-side-drawer__image'>
        <CircleProfileImg
          imageUrl='./IMG_2654.JPG'
          size={150}
          poster={<Poster />}
        />
      </div>
      <div className='profile-side-drawer__input'>
        <InputField
          label='Your name'
          hasWordCount
          hasEmoji
          onTextChangeHandler={(text) => console.log(text)}
        />
        <p>
          This is not your username or pin. This name will be visible to your
          whatsApp contacts
        </p>
        <InputField
          label='About'
          hasWordCount
          hasEmoji
          onTextChangeHandler={(text) => console.log(text)}
        />
      </div>
    </div>
  );
};

export default ProfileSideDrawer;
