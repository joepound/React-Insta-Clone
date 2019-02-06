import React, { useContext } from 'react';
import PropTypes from "prop-types";

import { UserAuthContext } from '../../providers/UserAuthProvider';
import { PostContext } from '../../providers/PostProvider';

import "./Comment.css";

function Comment(props) {
  const { currentUser } = useContext(UserAuthContext);
  const { toggleCommentHeart, deleteComment } = useContext(PostContext);

  return (
    <div className="post-comment">
      <div className="post-comment-box">
        <div className="post-comment-text">
          <span className="post-comment-text-username">
            {props.commentData.username}
          </span>
          <span className="post-comment-text-usercomment">
            {props.commentData.text}
          </span>
        </div>
        <div className="post-comment-heart">
          <img
            src={
              props.commentData.likes.includes(currentUser)
                ? "images/heart-on.png"
                : "images/heart-off.png"
            }
            alt="Heart"
            name="heart-comment-btn"
            data-post_id={props.post_id}
            data-comment_id={props.commentData._id}
            onClick={toggleCommentHeart}
          />
        </div>
      </div>
      <div className="post-comment-options">
        <div
          className={
            props.commentData.username === currentUser
              ? "post-comment-options-item"
              : "post-comment-options-item--hidden"
          }
          data-name="delete-comment-btn"
          data-post_id={props.post_id}
          data-comment_id={props.commentData._id}
          onClick={deleteComment}
        >
          Delete
        </div>
      </div>
    </div>
  );
}

Comment.propTypes = {
  post_id: PropTypes.string.isRequired,
  commentData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    likes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }).isRequired
};

export default Comment;
