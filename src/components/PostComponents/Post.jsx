import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostHeartsCount from './PostHeartsCount';
import PostIcons from './PostIcons';
import PostTimePeriod from './PostTimePeriod';
import CommentContainer from '../CommentComponents/CommentContainer';
import NewCommentForm from '../CommentComponents/NewCommentForm';

function Post(props) {
  return (
    <div className='user-post'>
      <PostHeader
        dp={props.postData.thumbnailUrl}
        username={props.postData.username}
      />
      <PostImage postImage={props.postData.imageUrl} />
      <PostIcons _id={props.postData._id} likes={props.postData.likes} />
      <PostHeartsCount likes={props.postData.likes} />
      <CommentContainer
        post_id={props.postData._id}
        comments={props.postData.comments}
      />
      <PostTimePeriod timestamp={props.postData.timestamp} />
      <NewCommentForm
        _id={props.postData._id}
        commentInput={props.commentInput}
      />
    </div>
  );
}

Post.propTypes = {
  postData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        username: PropTypes.string,
        text: PropTypes.string.isRequired,
        likes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
      }).isRequired
    ).isRequired
  }).isRequired,
  commentInput: PropTypes.string.isRequired
};

export default Post;
