import React from 'react';
import CommentLayout from '../CommentLayout/CommentLayout';

const Comments = (props) => {
    const comment = props.mainVideo.comments.map((comment) => {
        return <CommentLayout comment={comment} key={comment.id}/>
    })
    return (
        <section>
            {comment}
        </section>
    );
};

export default Comments;