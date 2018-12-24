import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
// import PostContainer from './components/PostContainer/PostContainer.js';
// import CommentSection from './components/CommentSection/CommentSection.js';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main className="ig-clone-container">
        <SearchBar />
      </main>
    );
  }
}

export default App;
