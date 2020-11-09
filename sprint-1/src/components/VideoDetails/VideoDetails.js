import viewsIcon from "../../assets/Icons/SVG/Icon-views.svg";
import likesIcon from "../../assets/Icons/SVG/Icon-likes.svg";
import "./VideoDetails.scss";

const VideoDetails = (props) => {
  console.log(props);
  return (
    <section className="video">
      <div className="video__title-container">
        <p className="video__title">{props.mainVideo.title}</p>
      </div>
      <div className="video__subinfo-container">
        <div className="video__creator-date-container">
          <p className="video__creator">By {props.mainVideo.channel}</p>
          <p className="video__date">{props.mainVideo.timestamp}</p>
        </div>
        <div className="video__views-likes">
          <div className="video__info-container-left">
            <img
              src={viewsIcon}
              className="video__views-icon"
              alt="video views"
            />
            <p className="video__views">{props.mainVideo.views}</p>
          </div>
          <div className="video__info-container-right">
            <img
              src={likesIcon}
              className="video__likes-icon"
              alt="video likes"
            />
            <p className="video__likes">{props.mainVideo.likes}</p>
          </div>
        </div>
      </div>
      <hr className="video__linebreak"/>
      <div className="video__description-container">
        <p className="video__description">{props.mainVideo.description}</p>
      </div>
    </section>
  );
};

export default VideoDetails;
