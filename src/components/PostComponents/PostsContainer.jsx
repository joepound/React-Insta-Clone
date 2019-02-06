import React, { useContext, useEffect } from 'react';

import { PostContext } from '../../providers/PostProvider';

import "./Post.css";

import Post from "./Post";
function PostsContainer(props) {
  const { posts, commentInputs } = useContext(PostContext);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts]);

  return (
    <div className="posts-area">
      {posts.map((postData, i) => (
        <Post
          key={postData._id}
          postData={postData}
          commentInput={commentInputs[i]}
        />
      ))}
    </div>
  );
}

export default PostsContainer;
