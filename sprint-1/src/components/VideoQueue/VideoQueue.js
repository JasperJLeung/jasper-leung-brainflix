import React from 'react';
import { sideVideo } from '../../utils/data';
import NextVideo from '../NextVideo/NextVideo';

const VideoQueue = (props) => {
    const video = props.sideVideo.map((video) => {
        if(video.id !== sideVideo[0].id) return <NextVideo key={video.id} video={video}/>
    })
    return (
        <div>
            {video}
        </div>
    );
};

export default VideoQueue;