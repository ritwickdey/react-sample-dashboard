import React, { Component } from 'react';
import './App.css';

import SideBar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Banner from './components/Banner/Banner';
import ContainPage from './components/ContainPage/ContainPage';

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="topbar">
          <Topbar />
        </div>
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="container">
          <ContainPage />
        </div>
      </div>
    );
  }
}

export default App;
