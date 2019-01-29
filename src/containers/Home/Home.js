import React, { Component } from 'react';
import './Home.scss';
import { VideoGrid } from '../../component/VideoGrid/VideoGrid';
import SideBar from '../SideBar/SideBar';

class Home extends Component {
  render() {
    return (
        <div className='home'>
        <SideBar />
          <div className="responsive-video-grid-container">
            <VideoGrid title='Trending' />
            <VideoGrid title='Autos & Vehicles' hideDivider={true}/>
          </div>
        </div>
    );
  }
}

export default Home;