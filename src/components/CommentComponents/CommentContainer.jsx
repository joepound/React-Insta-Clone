import React from "react";
import PropTypes from "prop-types";

import "./Comment.css";

import Comment from "./Comment";

function CommentContainer(props) {
  return (
    <div className="post-comments-area">
      {props.comments.map((commentData, i) => (
        <Comment
          key={commentData._id}
          post_id={props.post_id}
          commentData={commentData}
        />
      ))}
    </div>
  );
}

CommentContainer.propTypes = {
  post_id: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      username: PropTypes.string,
      text: PropTypes.string.isRequired,
      likes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired
  ).isRequired,
};

export default CommentContainer;
