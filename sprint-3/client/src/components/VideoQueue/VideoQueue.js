import React from 'react';
import NextVideo from '../NextVideo/NextVideo';
import './VideoQueue.scss';

const VideoQueue = (props) => {
    const video = props.sideVideo.filter((eachVideo) => {
return eachVideo.id !== props.mainVideo.id
    }).map((video) => {
        return <NextVideo key={video.id} video={video}/>
    })
    return (
        <div className="video__queue">
            <p className="video__queue-title">NEXT VIDEO</p>
            {video}
        </div>
    );
};

export default VideoQueue;