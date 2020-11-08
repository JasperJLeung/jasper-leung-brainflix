import './Video.scss';
const Video = (props) => {
    return (
        <section className="main__video">
            <div className="main__video-container">
                <video className="main__video-playing" src={props.mainVideo.video} poster={props.mainVideo.image}>

                </video>
            </div>
        </section>
    );
};

export default Video;

