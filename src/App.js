import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SideBar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Banner from './components/Banner/Banner';
import ContainPage from './components/ContainPage/ContainPage';

class App extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <Topbar />
        <Banner />
        <ContainPage />
      </div>
    );
  }
}

export default App;
