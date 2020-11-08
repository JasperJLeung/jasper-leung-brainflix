import { Component } from 'react';
import videoCurrent from '../../assets/Images/video-list-0.jpg';

class Video extends Component {
    render() {
        return (
            <section className="video">
                <div className="video__container">
                    <video className="video__playing" src={videoCurrent}>

                    </video>
                </div>
            </section>
        );
    }
}

export default Video;