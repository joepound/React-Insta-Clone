import React from 'react';

import './Header.css';

import HeaderLogos from './HeaderLogos';
import SearchBar from './SearchBar';
import HeaderIcons from './HeaderIcons';

function HeaderContainer(props) {
  return (
    <div className='header'>
      <HeaderLogos />
      <SearchBar />
      <HeaderIcons/>
    </div>
  );
}

export default HeaderContainer;
