import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { PostContext } from '../../providers/PostProvider';

import './Comment.css';

function NewCommentForm(props) {
  const { handleCommentInputChange, handleKeyDownOnCommentInput } = useContext(
    PostContext
  );

  return (
    <form className='post-comment-form'>
      <textarea
        className='post-comment-form-text'
        placeholder='Add a comment...'
        name='comment-input'
        data-_id={props._id}
        value={props.commentInput}
        onChange={handleCommentInputChange}
        onKeyDown={handleKeyDownOnCommentInput}
      />
      <div className='post-comment-form-options'>&#xf141;</div>
    </form>
  );
}

NewCommentForm.propTypes = {
  _id: PropTypes.string.isRequired,
  commentInput: PropTypes.string.isRequired
};

export default NewCommentForm;
