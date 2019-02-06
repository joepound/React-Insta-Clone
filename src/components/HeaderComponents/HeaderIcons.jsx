import React, { useContext, useEffect } from 'react';

import { UserAuthContext } from '../../providers/UserAuthProvider';

import './Header.css';

function HeaderIcons(props) {
  const { currentUser, logoutUser } = useContext(UserAuthContext);

  useEffect(() => {
    localStorage.setItem('currentUser', currentUser);
  }, [currentUser]);

  return (
    <div className='header-icons'>
      <img src='images/discover.png' alt='Discover' />
      <img src='images/heart-off.png' alt='Following data' />
      <img src='images/user.png' alt='User settings' />
      <button className='logout-btn' name='logout-btn' onClick={logoutUser}>
        Log Out
      </button>
    </div>
  );
}

export default HeaderIcons;
