import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

import Comment from './Comment.js';

const CommentContainer = props => {
  return (
    <div className="post-comments-area">
      {props.comments.map((commentData, i) =>
        <Comment
          key={i}
          commentData={commentData} />
      )}
    </div>
  );
}

CommentContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      username: PropTypes.string,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default CommentContainer;