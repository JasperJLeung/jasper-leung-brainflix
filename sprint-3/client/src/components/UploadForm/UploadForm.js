import React from 'react';
import './UploadForm.scss';
import {Link} from 'react-router-dom';

const UploadForm = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        props.onSubmitForm(event)
    };
    return (
        <div className="upload__info"> 
            <form className="upload__form" onSubmit={handleSubmit}>
                    <div className="upload__fields">
                        <div className="upload__input-container">
                            <div className="upload__lable-description"> 
                                <label htmlFor="description" className="upload__label">TITLE YOUR VIDEO</label>
                                <input name="title" className="upload__description upload__description-title" placeholder="Add a title to your video" rows="1" required></input>
                            </div>
                            <div> 
                                <label htmlFor="description" className="upload__label">ADD A VIDEO DESCRIPTION</label>
                                <textarea name="upload" className="upload__description upload__description-description" placeholder="Add a description of your video" rows="7" required></textarea>
                            </div>
                        </div>
                        <div className="upload__button-container">
                            <div className="publish__button-container">
                                <button type="submit" className="upload__button upload__button-publish">PUBLISH</button>
                            </div>
                            <div className="cancel__button-container">
                                <Link to="/" className="upload__button-cancel">CANCEL</Link>
                            </div>
                        </div>
                    </div>
             </form>
        </div>
    );
};

export default UploadForm;