import React, { useState, createContext } from 'react';

export const UserAuthContext = createContext();

function UserAuthProvider(props) {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  const userAuthContext = {
    usernameInput,
    passwordInput,
    currentUser,

    setters: {
      setUsernameInput,
      setPasswordInput
    },

    loginUser() {
      const user = usernameInput;

      setUsernameInput("");
      setPasswordInput("");
      setCurrentUser(user);
    },

    logoutUser() {
      setCurrentUser("");
    },

    handleTextInputChange(e) {
      userAuthContext.setters[e.currentTarget.name](e.currentTarget.value);
    },

    handleSubmit(e) {
      e.preventDefault();
      userAuthContext.loginUser();
    }
  };

  return (
    <UserAuthContext.Provider value={userAuthContext}>
      {props.children}
    </UserAuthContext.Provider>
  );
}

export default UserAuthProvider;