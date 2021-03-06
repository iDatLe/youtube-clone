import React from 'react';
import './RelatedVideos.scss';
import { VideoPreview } from '../VideoPreview/VideoPreview';
import { NextUpVideo } from './NextUpVideo/NextUpVideo';

export function RelatedVideos() {
    return (
        <div className="related-videos">
            <NextUpVideo />
            <VideoPreview horizontal={true}/>
            <VideoPreview horizontal={true}/>
            <VideoPreview horizontal={true}/>
        </div>
    )
}