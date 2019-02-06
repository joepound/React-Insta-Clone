import React, { useContext } from 'react';

import { UserAuthContext } from '../../providers/UserAuthProvider';
import './Login.css';

function LoginContainer(props) {
  const {
    usernameInput,
    passwordInput,
    handleTextInputChange,
    handleSubmit
  } = useContext(UserAuthContext);

  return (
    <form name='login-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter your username'
        value={usernameInput}
        name='setUsernameInput'
        onChange={handleTextInputChange}
      />
      <input
        type='password'
        placeholder='Enter your password'
        value={passwordInput}
        name='setPasswordInput'
        onChange={handleTextInputChange}
      />
      <button type='submit'>Log In</button>
    </form>
  );
}

export default LoginContainer;
