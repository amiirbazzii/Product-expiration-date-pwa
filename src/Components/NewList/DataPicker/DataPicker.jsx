import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';

const DatePickerFunc = (props) => {
  const [selectedDay, setSelectedDay] = useState({ date: null });

  const handleChange = (e) => {
    setSelectedDay({ date: e });
    props.expDate(e);
  };

  return (
    <DatePicker
      value={selectedDay.date}
      onChange={handleChange}
      inputPlaceholder='تاریخ انقضا را وارد کنید'
      shouldHighlightWeekends
      locale='fa'
      calendarPopperPosition='top'
      colorPrimary='#3da5eb'
    />
  );
};

export default DatePickerFunc;
