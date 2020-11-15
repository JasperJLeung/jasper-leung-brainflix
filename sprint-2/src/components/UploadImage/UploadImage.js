import React from 'react';
import VideoPreview from '../../assets/Images/Upload-video-preview.jpg'
import "./UploadImage.scss";

const UploadImage = () => {
    return (
        <div className="upload__container-image">
            <h1 className="upload__header">Upload Video</h1>
            <div className="upload__image-label">
                <span className="upload__label">VIDEO THUMBNAIL</span>
                <img src={VideoPreview} className="upload__image"></img>
            </div>
        </div>
    );
};

export default UploadImage;