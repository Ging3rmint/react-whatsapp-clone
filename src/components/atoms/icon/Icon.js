import React from "react";
import iconSet from "../../../icomoon/selection.json";
import IcomoonReact from "icomoon-react";

const Icon = ({ icon, size, color }) => {
  return (
    <i className='icon'>
      <IcomoonReact
        className='icon'
        iconSet={iconSet}
        color={color}
        size={size}
        icon={icon}
      />
    </i>
  );
};

export default Icon;
