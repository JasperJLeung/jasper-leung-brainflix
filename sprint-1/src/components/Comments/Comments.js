import React from 'react';
import CommentLayout from '../CommentLayout/CommentLayout';
import profilePic from '../../assets/Images/Mohan-muruge.jpg';

const Comments = (props) => {
    const comment = props.mainVideo.comments.map((comment) => {
        return <CommentLayout comment={comment} key={comment.id}/>
    })
    return (
        <section className="comments">
            <p>3 Comments</p>
            <div className="comment__header">
                <p className="comment__header-text">Join the Conversation</p>
            </div>
            <div className="comment__container">
                <div className="comment__left">
                    <img className="comment__image" src= {profilePic} alt="profile picture" />
                </div>
                <form className="comment__form">
                    <div className="comment__subheader">
                        <label for="name" className="comment__label">COMMENT</label> 
                        <textarea name="comment" className="comment__comment" placeholder="Add a new comment" rows="4" required></textarea>
                    </div>
                    <div className="comment__button-container">
                        <button type="submit" className="comment__button">COMMENT</button>
                    </div>
                </form>
            </div>
            {comment}
        </section>
    );
};

export default Comments;