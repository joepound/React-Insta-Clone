import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

const NewCommentForm = props => {
  return (
    <form className="post-comment-form">
      <textarea 
        className="post-comment-form-text" 
        placeholder="Add a comment..."
        name="commentInput"
        data-_id={props._id}
        value={props.commentInput}
        onChange={props.handleChange} >
      </textarea>
      <div className="post-comment-form-options">&#xf141;</div>
    </form>
  );
};

NewCommentForm.propTypes = {
  _id: PropTypes.string.isRequired,
  commentInput: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default NewCommentForm;