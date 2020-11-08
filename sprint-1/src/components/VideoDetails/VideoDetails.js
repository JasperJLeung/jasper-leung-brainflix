import { Component } from 'react';
import viewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../assets/Icons/SVG/Icon-likes.svg';


class VideoDetails extends Component {
    render() {
        return (
            <section className="video">
                <div className="video__title-container">
                    <p className="video__title"/>
                </div>
                <div className="video__creator-date-container">
                    <p className="video__creator" />
                    <p className="video__date" />
                </div>
                <div className="video__views-likes">
                    <div className="video__info-container-left"> 
                        <img src={viewsIcon} className="video__views-icon" alt="video views" />
                        <p className="video__views" />
                   </div>
                   <div className="video__info-container-right">
                        <img src={likesIcon} className="video__likes-icon" alt="video likes" />
                        <p className="video__likes" />
                   </div>
                </div>
            </section>
        );
    }
}

export default VideoDetails;