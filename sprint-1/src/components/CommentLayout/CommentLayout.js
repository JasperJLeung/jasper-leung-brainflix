import React from 'react';

const CommentLayout = (props) => {
    return (
        <div>
            {props.comment.name}
            {props.comment.date}
            {props.comment.comment}
        </div>
    );
};

export default CommentLayout;
