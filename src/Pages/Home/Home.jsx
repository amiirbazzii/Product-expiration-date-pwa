import React, { Component } from 'react';

import MenuBtn from '../../Components/MenuBtn/MenuBtn';
import Time from '../../Components/Date/Date';
import { today } from '../../Components/Date/Date';
import List from '../../Components/List/List';
import SideBar from '../../Components/SideBar/SideBar';
import AddBtn from '../../Components/AddBtn/AddBtn';
import NewList from '../../Components/NewList/NewList';

import './Home.scss';

export default class index extends Component {
  state = {
    sideBar: false,
    addList: false,
    listData: [],
  };

  showSideBar = () => {
    this.setState({ sideBar: true });
  };

  closeSideBar = () => {
    this.setState({ sideBar: false });
  };

  handleAddList = () => {
    this.setState({ addList: !this.state.addList });
  };

  handleSubmit = (item) => {
    const data = {
      commodity: item.name,
      expirationDate: item.date,
      entryDate: today,
    };
    this.setState({ listData: [...this.state.listData, data] });
  };

  handleDelete = (id) => {
    const newArr = [...this.state.listData];

    newArr.splice(id, 1);
    this.setState({ listData: newArr });
  };

  render() {
    return (
      <div className='home'>
        <SideBar show={this.state.sideBar} sideBarClosed={this.closeSideBar} />
        <header className='nav'>
          <MenuBtn show={this.showSideBar} close={this.state.sideBar} />
          <Time />
        </header>
        <List data={this.state.listData} onDelete={this.handleDelete} />
        <AddBtn clicked={this.handleAddList} btnStyle={this.state.addList} />
        <NewList
          show={this.state.addList}
          clicked={this.handleAddList}
          list={this.state.listData}
          onFormSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
