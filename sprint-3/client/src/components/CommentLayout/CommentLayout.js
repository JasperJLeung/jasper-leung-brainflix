import React from "react";
import "./CommentLayout.scss";

const CommentLayout = (props) => {
  return (
    <div className="comment__section-container">
      <div className="comment__posted">
        <div className="comment__posted-avatar-container">
          <div className="comment__posted-avatar"></div>
        </div>
        <div className="comment__posted-container">
          <div className="comment__posted-info">
            <span className="comment__posted-name">{props.comment.name}</span>
            <span className="comment__posted-date">{new Date(props.comment.timestamp).toLocaleDateString()}</span>
          </div>
          <div className="comment__posted-text">{props.comment.comment}</div>
        </div>
      </div>
      <hr className="comment__section-linebreak"/>
    </div>
  );
};

export default CommentLayout;