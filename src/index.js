import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import UserAuthProvider from './providers/UserAuthProvider';
import PostProvider from './providers/PostProvider';
import App from './App';

ReactDOM.render(
  <UserAuthProvider>
    <PostProvider>
      <App />
    </PostProvider>
  </UserAuthProvider>,
  document.getElementById('root')
);
