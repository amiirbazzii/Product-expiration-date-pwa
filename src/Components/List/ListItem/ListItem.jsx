import React from 'react';

import './ListItem.scss';

const Item = (props) => {
  return (
    <div className='item'>
      <div className='d-flex'>
        <h2 className='commodity'>{props.commodity}</h2>
        <div
          className='item-btn'
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          ×
        </div>
      </div>
      <div className='d-flex'>
        <p className='entry'>تاریخ ورود: {props.entry}</p>
        <p className='expiration'>تاریخ انقضا: {props.expiration}</p>
      </div>
    </div>
  );
};

export default Item;
