import React from 'react';
import './Home.scss';
import { VideoGrid } from '../../component/VideoGrid/VideoGrid';
import SideBar from '../SideBar/SideBar';

export function Home() {
    return (
      <>
        <SideBar/>
        <div className='home'>
          <div className="responsive-video-grid-container">
            <VideoGrid title='Trending'/>
            <VideoGrid title='Autos & Vehicles' hideDivider={true}/>
          </div>
        </div>
      </>
    );
}

