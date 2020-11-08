import React from "react";
import "./NextVideo.scss";

const NextVideo = (props) => {
  return (
    <div className="next-video">
      <div className="next-video__image-container">
        <img
          className="next-video__image"
          src={props.video.image}
          alt={props.video.title}
        />
      </div>
      <div className="next-video__info">
        <span className="next-video__title">{props.video.title}</span>
        <span className="next-video__channel">{props.video.channel}</span>
      </div>
    </div>
  );
};

export default NextVideo;
