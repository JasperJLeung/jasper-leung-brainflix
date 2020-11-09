import "./Video.scss";
import play from "../../assets/Icons/SVG/Icon-play.svg";
import fullscreen from "../../assets/Icons/SVG/Icon-fullscreen.svg";
import volume from "../../assets/Icons/SVG/Icon-volume.svg";

const Video = (props) => {
  return (
    <section className="main__video">
      <div className="main__video-container">
        <video
          className="main__video-playing"
          src={props.mainVideo.video}
          poster={props.mainVideo.image}
        ></video>
        <div className="main__video-controls-container">
          <div className="main__video-play-container">
            <img className="main__video-play" src={play}></img>
          </div>
          <div className="main__video-scrubber-container">
            <progress className="main__video-scrubber" min="0" value="0"></progress>
            <span className="main__video-duration">0:00/{props.mainVideo.duration}</span>
          </div>
          <div className="main__video-image-container">
            <img className="main__video-fullscreen" src={fullscreen}></img>
            <img className="main__video-volume" src={volume}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
