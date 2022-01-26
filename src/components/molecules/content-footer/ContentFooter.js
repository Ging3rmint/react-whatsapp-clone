import React from "react";
import IconButton from "../../atoms/icon-button/IconButton";

const ContentFooter = () => {
  return (
    <div className='content-footer'>
      <div className='content-footer__left'>
        <IconButton icon='hipster' size={18} color='#444' />
        <IconButton icon='attachment' size={18} color='#444' />
      </div>
      <input type='text' placeholder='Type a message' />
      <div className='content-footer__right'>
        <IconButton icon='paperplane' size={18} color='#444' />
      </div>
    </div>
  );
};

export default ContentFooter;
