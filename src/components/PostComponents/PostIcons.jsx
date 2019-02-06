import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { UserAuthContext } from '../../providers/UserAuthProvider';
import { PostContext } from '../../providers/PostProvider';

import './Post.css';

function PostIcons(props) {
  const { currentUser } = useContext(UserAuthContext);
  const { togglePostHeart } = useContext(PostContext);

  return (
    <div className='post-icons'>
      <img
        src={
          props.likes.includes(currentUser)
            ? 'images/heart-on.png'
            : 'images/heart-off.png'
        }
        alt='Heart'
        name='heart-post-btn'
        data-_id={props._id}
        onClick={togglePostHeart}
      />
      <img
        src='images/comment.png'
        alt='comment'
        name='comment-btn'
        data-_id={props._id}
      />
    </div>
  );
}

PostIcons.propTypes = {
  _id: PropTypes.string.isRequired,
  likes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default PostIcons;
