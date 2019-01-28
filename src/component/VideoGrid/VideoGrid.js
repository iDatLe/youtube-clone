import React from 'react';
import './VideoGrid.scss';
// import { VideoGridHeader } from './VideoGridHeader/VideoGridHeader';
import { Divider } from 'semantic-ui-react';
import { VideoPreview } from '../VideoPreview/VideoPreview';

export function VideoGrid(props) {
    const divider = props.hideDivider ? null : <Divider />;
    return (
        <>
            <h4>Trending</h4>
            <div class="video-grid">
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
            </div>
            { divider }
        </>
    )
}