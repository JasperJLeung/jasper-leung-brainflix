import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import UploadImage from '../../components/UploadImage/UploadImage'
import UploadForm from '../../components/UploadForm/UploadForm';

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
            setInterval (() => {this.props.history.push("/")},3000);
            // this.props.history.push("/")
        })
    }
    render() {
        return (
            <div className="Upload">
                <Header />
                <div> 
                    <UploadImage />
                    <UploadForm onSubmitForm={this.onSubmitForm} />
                </div>
               {this.state.redirect && <span>Video Uploaded!</span>}
            </div>
        );
    }
}

export default Upload;