import React from "react";
import iconSet from "../../../icomoon/selection.json";
import IcomoonReact from "icomoon-react";

const SideNavSearch = ({ placeholder }) => {
  return (
    <div className='side-nav-search'>
      <div className='side-nav-search__wrapper'>
        <IcomoonReact
          className='icon'
          iconSet={iconSet}
          color='#444'
          size={11}
          icon='search'
        />
        <input type='text' placeholder={placeholder} />
      </div>
    </div>
  );
};

export default SideNavSearch;
