import React, { useContext } from 'react';

import { PostContext } from '../../providers/PostProvider';

import './Header.css';

function SearchBar(props) {
  const { postQueryInput, handleSearchQueryChange } = useContext(PostContext);

  return (
    <div className='ig-search'>
      <input
        className='ig-search-bar'
        type='search'
        placeholder='&#xf002; Search'
        value={postQueryInput}
        name='postQueryInput'
        onChange={handleSearchQueryChange}
      />
    </div>
  );
}

export default SearchBar;
