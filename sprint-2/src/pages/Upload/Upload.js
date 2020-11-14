import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import UploadImage from '../../components/UploadImage/UploadImage'
import UploadForm from '../../components/UploadForm/UploadForm';

class Upload extends Component {
    render() {
        return (
            <div className="Upload">
                <Header />
                <div> 
                    <UploadImage />
                    <UploadForm  />
                </div>
            </div>
        );
    }
}

export default Upload;