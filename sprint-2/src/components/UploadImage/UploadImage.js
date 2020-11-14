import React from 'react';
import VideoPreview from '../../assets/Images/Upload-video-preview.jpg'

const UploadImage = () => {
    return (
        <div className="upload__image">
            <h1>Upload Video</h1>
            <div>
                <span>VIDEO THUMBNAIL</span>
                <img src={VideoPreview}></img>
            </div>
        </div>
    );
};

export default UploadImage;