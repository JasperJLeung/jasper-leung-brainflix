import React from 'react';
import { sideVideo } from '../../utils/data';
import NextVideo from '../NextVideo/NextVideo';
import './VideoQueue.scss';

const VideoQueue = (props) => {
    const video = props.sideVideo.map((video) => {
        if(video.id !== sideVideo[0].id) return <NextVideo key={video.id} video={video}/>
    })
    return (
        <div className="video__queue">
            <p className="video__queue-title">NEXT VIDEO</p>
            {video}
        </div>
    );
};

export default VideoQueue;