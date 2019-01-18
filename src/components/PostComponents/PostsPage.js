import React from "react";
import PropTypes from "prop-types";

import "./Post.css";

import HeaderContainer from "../HeaderComponents/HeaderContainer";
import PostsContainer from "./PostsContainer.js";

const PostsPage = props => {
  return (
    <div className="posts-page">
      <HeaderContainer
        postQueryInput={props.postQueryInput}
        handleChange={props.handleChange}
        handleClick={props.handleClick}
      />
      <PostsContainer
        currentUser={props.currentUser}
        posts={props.posts}
        commentInputs={props.commentInputs}
        handleClick={props.handleClick}
        handleChange={props.handleChange}
        handleKeyDown={props.handleKeyDown}
      />
    </div>
  );
};

PostsPage.propTypes = {
  currentUser: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
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
    }).isRequired
  ).isRequired,
  postQueryInput: PropTypes.string.isRequired,
  commentInputs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired
};

PostsPage.defaultProps = {
  currentUser: "Instagram User"
};

export default PostsPage;
