import React from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import SideBar from './containers/SideBar/SideBar';
import { Home } from './containers/Home/Home';
import './containers/Home/Home.scss';
import './App.scss';

function App() {
  return (
    <div className="appContainer">
      <HeaderNav />
      <SideBar />
      <Home />
    </div>
  )
}

export default App;