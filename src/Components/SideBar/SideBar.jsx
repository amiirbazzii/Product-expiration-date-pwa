import React from 'react';

import Backdrop from '../Backdrop/Backdrop';

import './SideBar.scss';

const sideBar = (props) => {
  return (
    <center
      className='side-bar'
      style={{
        opacity: props.show ? '1' : '0',
      }}
    >
      <Backdrop show={props.show} clicked={props.sideBarClosed} />
      <div className='menu-items' onClick={props.sideBarClosed}>
        <div
          className='menu-item'
          style={{
            display: props.show ? 'block' : 'none',
          }}
        >
          <div className='link'>
            <a href='/Product-expiration-date/'>صفحه اصلی</a>
          </div>
          <div className='link'>
            <a href='/Product-expiration-date/'>تماس با ما</a>
          </div>
        </div>
      </div>
    </center>
  );
};

export default sideBar;
