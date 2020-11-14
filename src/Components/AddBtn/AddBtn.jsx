import React from 'react';

import { ReactComponent as Add } from '../../Static/Icon/plus.svg';

import './AddBtn.scss';

const AddList = (props) => {
  let styleBtn = 'svg';
  if (props.btnStyle) {
    styleBtn = `${styleBtn} rotate`;
  }

  return (
    <div className='add-icon'>
      <div className='bg-icon-' onClick={props.clicked}>
        <Add className={styleBtn} />
      </div>
    </div>
  );
};
export default AddList;
