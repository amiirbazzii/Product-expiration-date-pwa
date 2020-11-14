import React, { Component } from 'react';

import './MenuBtn.scss';

export default class MenuBtn extends Component {
  state = {
    btnToggle: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.btnToggle !== nextProps.btnToggle) {
      return {
        btnToggle: nextProps.close,
      };
    }
    return null;
  }

  render() {
    let styleBtn = 'menu-btn';
    if (this.state.btnToggle) {
      styleBtn = `${styleBtn} change`;
    }

    return (
      <div className={styleBtn} onClick={this.props.show}>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </div>
    );
  }
}
