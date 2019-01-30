import React from 'react';
import './Watch.scss';
import { Video } from '../../component/Video/Video'; 
import { RelatedVideos } from '../../component/RelatedVideos/RelatedVideos';

export function Watch() {
    return (
        <div className="watch-grid">
            <Video id='WMTx590rIMw' />
            <div className='metadata' style={{width: '100%', height: '100px', background: '#F91112'}}>Metadata</div>
            <div className='video-info-box' style={{width: '100%', height: '100px', background: '#BD10E0'}}>Video Info box</div>
            <div className='comments' style={{width: '100%', height: '100px', background: '#9013FE'}}>comments</div>
            <RelatedVideos className='relatedVideos'/>
        </div>
    )
};
