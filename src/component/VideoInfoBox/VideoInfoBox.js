import React, { useState } from 'react';
import './VideoInfoBox.scss';
import { Image, Button, Divider } from 'semantic-ui-react';

export function VideoInfoBox() {
    const [collapsed, setCollapsed] = useState(false);

    const onToggleCollapseButtonClick = () => {
        setCollapsed(!collapsed)
    }

    let descriptionTextClass = 'collapsed';
    let buttonTitle = 'Show More';
    if (!collapsed) {
        descriptionTextClass = 'expanded';
        buttonTitle = 'Show Less';
    }

    return (
        <>
            <div className='video-info-box'>
                <Image className='channel-image' src='http://via.placeholder.com/48x48' circular/>
                <div className="video-info">
                    <div className='channel-name'>Channel Name</div>
                    <div className='video-publication-date'>Thu 24, 2017</div>
                </div>
                <Button className='subscribe' color='youtube'>91.5K Subscribe</Button>
                <div className="video-description">
                    <div className={descriptionTextClass}>
                        {/*descriptionParagraphs*/}
                        <p>paragraphs</p>
                        <p>paragraphs</p>
                        <p>paragraphs</p>
                        <p>paragraphs</p>
                        <p>paragraphs</p>
                        <p>paragraphs</p>
                        <p>paragraphs</p>
                    </div>
                    <Button compact onClick={onToggleCollapseButtonClick}>{buttonTitle}</Button>
                </div>
            </div>
            <Divider />
        </>
    )
}

