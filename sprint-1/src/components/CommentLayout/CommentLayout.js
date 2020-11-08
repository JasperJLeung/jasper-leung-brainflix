import React from "react";
import "./CommentLayout.scss";

const CommentLayout = (props) => {
  return (
    <div>
      <div className="comment__posted">
        <div className="comment__posted-avatar-container">
          <div className="comment__posted-avatar"></div>
        </div>
        <div className="comment__posted-container">
          <div className="comment__posted-info">
            <span className="comment__posted-name">{props.comment.name}</span>
            <span className="comment__posted-date">{props.comment.date}</span>
          </div>
          <div className="comment__posted-text">{props.comment.comment}</div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CommentLayout;
