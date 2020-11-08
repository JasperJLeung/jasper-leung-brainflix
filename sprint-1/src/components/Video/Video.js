
const Video = (props) => {
    return (
        <section className="video">
            <div className="video__container">
                <video className="video__playing" src={props.mainVideo.video} poster={props.mainVideo.image}>

                </video>
            </div>
        </section>
    );
};

export default Video;

