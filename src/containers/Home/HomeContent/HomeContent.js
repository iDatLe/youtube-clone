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

export default HomeContent;