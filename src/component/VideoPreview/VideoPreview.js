import React from 'react';
import { Image } from 'semantic-ui-react';
import './VideoPreview.scss';

export function VideoPreview(props) {

    const horizontal = props.horizontal ? 'horizontal' : null;
    console.log(horizontal, 'horizontal')

    return (
        <div className={['video-preview', horizontal].join(' ')}>
            <div className='image-container'>
                <Image src='http://via.placeholder.com/210x118' />

                <div className='time-label'>
                    <span>12:50</span>
                </div>
            </div>

            <div className="video-info">
                <div className="semi-bold show-max-two-lines">Video title</div>
                
                <div className="video-preview-metadata-container">
                    <div className="channel-title">Channel title</div>
                    <div><span>3.8M views • 2 days ago</span></div>
                </div>
            </div>

        </div>
    )
};