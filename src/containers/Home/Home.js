<<<<<<< HEAD
import React from 'react';
import './Home.scss';
import SideBar from '../SideBar/SideBar';
import HomeContent from './HomeContent/HomeContent';

function Home() {
  return (
    <>
      <SideBar />
      <HomeContent />
    </>
  )
=======
import React, { Component } from 'react';

import SideBar from '../SideBar/SideBar';
import HomeContent from './HomeContent/HomeContent';

class Home extends Component {
  render() {
    return (
        <>
          <SideBar />
          <HomeContent />
        </>
    );
  }
>>>>>>> 840cc7fbef9e7a1176f1893f1e700bdea41ad19a
}

export default Home;