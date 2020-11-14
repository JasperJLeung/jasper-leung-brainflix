import "./Video.scss";
import play from "../../assets/Icons/SVG/Icon-play.svg";
import fullscreen from "../../assets/Icons/SVG/Icon-fullscreen.svg";
import volume from "../../assets/Icons/SVG/Icon-volume.svg";
import {apiKey} from "../../utils/axios";

const Video = (props) => {
  return (
    <section className="main__video">
      <div className="main__video-container">
        <video
          className="main__video-playing"
          src={props.mainVideo.video + "?api_key=" + apiKey}
          poster={props.mainVideo.image}
        ></video>
        <div className="main__video-controls-container">
          <div className="main__video-play-container">
            <img className="main__video-play" src={play} alt="play"></img>
          </div>
          <div className="main__video-scrubber-container">
            <progress className="main__video-scrubber" min="0" value="0"></progress>
            <span className="main__video-duration">0:00/{props.mainVideo.duration}</span>
          </div>
          <div className="main__video-image-container">
            <img className="main__video-fullscreen" src={fullscreen} alt="play"></img>
            <img className="main__video-volume" src={volume} alt="play"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;