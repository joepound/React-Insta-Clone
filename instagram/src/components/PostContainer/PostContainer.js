import React, { Component } from 'react';

import './PostContainer.css';

import HeartIcon from '../../heart.png';
import CommentIcon from '../../comment.png';

class PostContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <article className="ig-clone__post">
        <header className="ig-clone__post__poster-info">
          <div className="ig-clone__post__poster-info__dp"><img src={this.props.igPostData.thumbnailUrl}/></div>
          <span className="ig-clone__post__poster-info__acct">{this.props.igPostData.username}</span>
        </header>
        <figure className="ig-clone__post__photo">
          <img src={this.props.igPostData.imageUrl}/>
        </figure>
        <div className="ig-clone__post__icons">
          <input type="image" src={HeartIcon} alt="Like this photo"/>
          <input type="image" src={CommentIcon} alt="Comment on this photo"/>
        </div>
        <div className="ig-clone__post__likes"><span className="ig-clone__post__likes__count">{this.props.igPostData.likes}</span> likes</div>
      </article>
    );
  }
}

export default PostContainer;