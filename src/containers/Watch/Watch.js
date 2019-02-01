import React from 'react';
import './Watch.scss';
import { Video } from '../../component/Video/Video'; 
import { RelatedVideos } from '../../component/RelatedVideos/RelatedVideos';
import { VideoMetaData } from '../../component/VideoMetaData/VideoMetaData';

export function Watch() {
    return (
        <div className="watch-grid">
            <Video id='WMTx590rIMw' />
            <VideoMetaData className='metadata' viewCount={1000} />
            <div className='video-info-box' style={{width: '100%', height: '100px', background: '#BD10E0'}}>Video Info box</div>
            <div className='comments' style={{width: '100%', height: '100px', background: '#9013FE'}}>comments</div>
            <RelatedVideos className='relatedVideos'/>
        </div>
    )
};
