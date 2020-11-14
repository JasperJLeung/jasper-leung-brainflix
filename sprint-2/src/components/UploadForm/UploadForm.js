import React from 'react';

const UploadForm = (props) => {

    return (
        <div className="uploadInfo"> 
            <form className="upload__form">
                    <p className="comment__header">JOIN THE CONVERSATION</p>
                    <div className="upload__fields">
                        <div className="upload__input-container">
                            <div> 
                                <label htmlFor="description">TITLE YOUR VIDEO</label>
                                <input name="title" className="upload__description" placeholder="Add a title to your video" rows="1" required></input>
                            </div>
                            <div> 
                                <label htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                                <textarea name="upload" className="upload__description" placeholder="Add a description of your video" rows="4" required></textarea>
                            </div>
                        </div>
                        <div className="publish__button-container">
                            <button type="submit" className="upload__button-publish">PUBLISH</button>
                        </div>
                        <div className="cancel__button-container">
                            <button type="submit" className="upload__button-cancel">CANCEL</button>
                        </div>
                    </div>
             </form>
        </div>
    );
};

export default UploadForm;