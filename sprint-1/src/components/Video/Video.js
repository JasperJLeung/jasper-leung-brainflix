import "./Video.scss";
import play from "../../assets/Icons/SVG/Icon-play.svg";
import scrubber from "../../assets/Icons/SVG/Icon-scrubber-control.svg";
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
          <div className="main__video-image-container">
            <img className="main__video-play" src={play}></img>
          </div>
          <div className="main__video-image-container">
            <img className="main__video-scrubber" src={scrubber}></img>
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
