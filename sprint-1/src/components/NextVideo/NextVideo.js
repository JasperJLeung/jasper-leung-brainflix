import React from 'react';

const NextVideo = (props) => {
    return (
        <div>
            <img src={props.video.image} alt={props.video.title}/>
            {props.video.title}
            {props.video.channel}

            
        </div>
    );
};

export default NextVideo;