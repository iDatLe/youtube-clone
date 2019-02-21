<<<<<<< HEAD
import React from 'react';
import './HomeContent.scss';
import { VideoGrid } from '../../../component/VideoGrid/VideoGrid';

function HomeContent() {
    return (
        <div className='home-content'>
          <div className="responsive-video-grid-container">
            <VideoGrid title='Trending' />
            <VideoGrid title='Autos & Vehicles' hideDivider={true}/>
          </div>
        </div>
    );
}

=======
import React, { Component } from 'react';
import './HomeContent.scss';
import { VideoGrid } from '../../../component/VideoGrid/VideoGrid';

class HomeContent extends Component {
  render() {
    return (
        <div className='home-content'>
          <div className="responsive-video-grid-container">
            <VideoGrid title='Trending' />
            <VideoGrid title='Autos & Vehicles' hideDivider={true}/>
          </div>
        </div>
    );
  }
}

>>>>>>> 840cc7fbef9e7a1176f1893f1e700bdea41ad19a
export default HomeContent;