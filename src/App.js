import React from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import SideBar from './containers/SideBar/SideBar';
import './App.scss';

function App() {
  return (
    <div className="appContainer">
      <HeaderNav />
      <SideBar />
    </div>
  )
}

export default App;