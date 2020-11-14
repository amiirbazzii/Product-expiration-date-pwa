import React, { Component } from 'react';

import DatePicker from './DataPicker/DataPicker';
import Backdrop from '../Backdrop/Backdrop';

import './NewList.scss';

export default class NewList extends Component {
  state = {
    name: '',
    date: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === '' || this.state.date === '') return;
    this.props.onFormSubmit(this.state);
    this.setState({ name: '', date: '' });
  };

  handleDate = (e) => {
    let expDateString = e.day + '-' + e.month + '-' + e.year;
    this.setState({ date: expDateString });
  };

  render() {
    return (
      <div
        className='new-list'
        style={{
          opacity: this.props.show ? 1 : 0,
        }}
      >
        <Backdrop show={this.props.show} clicked={this.props.clicked} />
        <form
          className='list-inputs'
          onSubmit={this.handleSubmit}
          style={{
            display: this.props.show ? 'block' : 'none',
          }}
        >
          <h3
            className='list-title'
            style={{
              display: this.props.show ? 'block' : 'none',
            }}
          >
            اضافه کردن محصول
          </h3>
          <input
            type='text'
            name='name'
            className='newlist-input'
            value={this.state.name}
            placeholder='نام محصول را وارد کنید'
            onChange={(e) => this.setState({ name: e.target.value })}
          />

          <DatePicker expDate={this.handleDate} />
          <button className='list-btn' onClick={this.props.clicked}>
            اضافه کنید
          </button>
        </form>
      </div>
    );
  }
}
