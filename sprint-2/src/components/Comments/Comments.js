import React from 'react';
import CommentLayout from '../CommentLayout/CommentLayout';
import profilePic from '../../assets/Images/Mohan-muruge.jpg';
import './Comments.scss';

const Comments = (props) => {
    const comment = props.mainVideo.comments && props.mainVideo.comments.map((comment) => {
        return <CommentLayout comment={comment} key={comment.id}/>
    })
    return (
        <section className="comment">
            <p className="comment__number">3 Comments</p>
            
            <div className="comment__container">
                <div className="comment__left">
                    <img className="comment__image" src= {profilePic} alt="profile" />
                </div>
                <form className="comment__form">
                    <div className="comment__header">
                        <p className="comment__header-text">JOIN THE CONVERSATION</p>
                    </div>
                    <div className="comment__fields">
                        <div className="comment__input">
                            <textarea name="comment" className="comment__comment" placeholder="Write comment here" rows="4" required></textarea>
                        </div>
                        <div className="comment__button-container">
                            <button type="submit" className="comment__button">COMMENT</button>
                        </div>
                    </div>
                </form>
            </div>
            <hr className="comment__linebreak"/>
            {comment}
        </section>
    );
};

export default Comments;