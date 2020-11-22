import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import UploadImage from '../../components/UploadImage/UploadImage'
import UploadForm from '../../components/UploadForm/UploadForm';
import "./Upload.scss";
import axios from 'axios';

class Upload extends Component {
    state = {
        redirect: false
    }

    postNewVideo = (event) => {
        axios.post(
            "http://localhost:8080/videos", {
                title: event.target.title.value,
                description: event.target.upload.value,
        comments: [],
        channel: "BrainStation",
        image: "http://localhost:8080/Upload-video-preview.jpg",
        views: 0,
        likes: 0,
        duration: "0:42",
        video: "http://localhost:8080/BrainStationSampleVideo.mp4",
        timestamp: new Date().getTime(),
            }
        ).then(() => { 
            this.setState({
            title: event.target.title.value,
            description: event.target.upload.value
        }, () => {
            this.setState({
                redirect: true
            })
            this.props.history.push("/");
            })
        })
    }
    onSubmitForm = (video) => {
        this.postNewVideo(video)

        video.target.reset();
    }

    render() {
        return (
            <>
            <Header />
            <div className="upload">
                <div className="upload__header-container">
                    <h1 className="upload__header">Upload Video</h1>
                </div>
                <div className="upload__main"> 
                    <UploadImage />
                    <UploadForm onSubmitForm={this.onSubmitForm} />
                </div>
               {this.state.redirect && <span>Video Uploaded!</span>}
            </div>
            </>
        );
    }
}

export default Upload;