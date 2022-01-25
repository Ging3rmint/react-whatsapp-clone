import React from "react";
import iconSet from "../../../icomoon/selection.json";
import IcomoonReact from "icomoon-react";

const IconButton = ({ icon, size, color, onPress }) => {
  return (
    <button className='icon-button' onClick={onPress}>
      <IcomoonReact
        className='icon'
        iconSet={iconSet}
        color={color}
        size={size}
        icon={icon}
      />
    </button>
  );
};

export default IconButton;
