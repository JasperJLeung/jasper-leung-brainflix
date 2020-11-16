import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import UploadImage from '../../components/UploadImage/UploadImage'
import UploadForm from '../../components/UploadForm/UploadForm';
import "./Upload.scss";

class Upload extends Component {
    state = {
        title: "",
        description: "",
        redirect: false
    }
    onSubmitForm = (event) => {
        event.target.reset();
        this.setState({
            title: event.target.title.value,
            description: event.target.upload.value
        }, () => {
            this.setState({
                redirect: true
            })
            this.props.history.push("/");
        })
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