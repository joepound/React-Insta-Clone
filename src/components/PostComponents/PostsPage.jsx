import React from 'react';

import './Post.css';

import HeaderContainer from '../HeaderComponents/HeaderContainer';
import PostsContainer from './PostsContainer';

function PostsPage(props) {
  return (
    <div className='posts-page'>
      <HeaderContainer />
      <PostsContainer />
    </div>
  );
}

export default PostsPage;
