import React from 'react';

import './SearchBar.css';

import InstagramIcon from './../../instagram.png';
import DiscoverIcon from './../../discover.png';
import HeartIcon from './../../heart.png';
import UserIcon from './../../user.png';

const SearchBar = props => {
  return (
    <nav className="ig-clone__search-bar">
      <div className="ig-clone__search-bar__ig-logos">
        <input className="ig-clone__search-bar__ig-logos__icon" type="image" src={InstagramIcon} alt="Instagram Home"/> | <span className="ig-clone__search-bar__ig-logos__text">Instagram</span>
      </div>
      <div className="ig-clone__search-bar__container">
        <input className="ig-clone__search-bar__input" placeholder="Search"/>
      </div>
      <div className="ig-clone__search-bar__nav-icons">
        <input type="image" src={DiscoverIcon} alt="Discover more friends"/>
        <input type="image" src={HeartIcon} alt="Notifications"/>
        <input type="image" src={UserIcon} alt="Your profile"/>
      </div>
    </nav>
  );
};

export default SearchBar;