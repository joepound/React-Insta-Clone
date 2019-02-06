import React, { useContext, useEffect } from 'react';

import { UserAuthContext } from './providers/UserAuthProvider';

import LoginContainer from './components/LoginComponents/LoginContainer';
import PostsPage from './components/PostComponents/PostsPage';

function App(props) {
  let { currentUser } = useContext(UserAuthContext);
  if (!currentUser) {
    currentUser = localStorage.getItem('currentUser') || '';
  }

  useEffect(() => {
    localStorage.setItem('currentUser', currentUser);
  }, [currentUser]);

  return currentUser ? <PostsPage /> : <LoginContainer />;
}

export default App;
