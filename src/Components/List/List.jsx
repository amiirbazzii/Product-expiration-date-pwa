import React from 'react';

import ListItem from './ListItem/ListItem';

import './List.scss';

const List = (props) => {
  let list = <h2 className='nolist'>هنوز محصولی ثبت نکرده‌اید</h2>;
  if (props.data.length > 0) {
    list = props.data.map((item, index) => {
      return (
        <ListItem
          key={index}
          id={index}
          commodity={item.commodity}
          entry={item.entryDate}
          expiration={item.expirationDate}
          onDelete={props.onDelete}
        />
      );
    });
  }

  let style = '';
  if (props.data.length > 0) {
    style = 'list';
  }

  return (
    <center className={style} clicked={props.clicked}>
      {list}
    </center>
  );
};

export default List;
