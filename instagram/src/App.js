import React, { Component } from 'react';

import './App.css';

import dummyData from './dummy-data.js';

import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  constructor() {
    super();
    this.igData = dummyData;
  }

  render() {
    return (
      <main className="ig-clone-container">
        <SearchBar />
        <div className="ig-clone-main-content">
          {this.igData.map(data => <PostContainer key={data.id} igPostData={data} />)}
        </div>
      </main>
    );
  }
}

export default App;
