import React from "react";
import "./NextVideo.scss";
import {Link} from 'react-router-dom'

const NextVideo = (props) => {
  return (
    <div className="next-video">
      <div className="next-video__image-container">
        <Link to={"/" + props.video.id}> 
        <img
          className="next-video__image"
          src={props.video.image}
          alt={props.video.title}
        />
        </Link>
       
      </div>
      <div className="next-video__info">
        <span className="next-video__title">{props.video.title}</span>
        <span className="next-video__channel">{props.video.channel}</span>
      </div>
    </div>
  );
};

export default NextVideo;