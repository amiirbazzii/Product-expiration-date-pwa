import React from 'react';
import moment from 'jalali-moment';

import './Date.scss';

let year = new Date().getFullYear();
let month = new Date().getMonth();
let day = new Date().getDate();

export const now = `${year}/${month}/${day}`;

export const today = moment(now, 'YYYY/MM/DD')
  .locale('fa')
  .format('YYYY/MM/DD');

const Time = () => <p className='date'>{today}</p>;

export default Time;
