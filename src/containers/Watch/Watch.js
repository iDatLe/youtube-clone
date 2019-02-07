import React from 'react';
import './Watch.scss';
import { Video } from '../../component/Video/Video'; 
import { RelatedVideos } from '../../component/RelatedVideos/RelatedVideos';
import { VideoMetadata } from '../../component/VideoMetaData/VideoMetadata';
import { VideoInfoBox } from '../../component/VideoInfoBox/VideoInfoBox';
import { Comments } from '../Comments/Comments';

export function Watch() {
    return (
        <div className="watch-grid">
            <Video id='WMTx590rIMw' />
            <VideoMetadata className='metadata' viewCount={1000} />
            <VideoInfoBox className='video-info-box' />
            <Comments className='comments' />
            <RelatedVideos className='relatedVideos'/>
        </div>
    )
};
