import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
// import CommentSection from './components/CommentSection/CommentSection.js';

class App extends Component {
  constructor() {
    super();
    this.igData = dummyData;
  }

  render() {
    return (
      <main className="ig-clone-container">
        <SearchBar />
        {this.igData.map(data => <PostContainer key={data.id} igPostData={data} />)}
      </main>
    );
  }
}

export default App;
