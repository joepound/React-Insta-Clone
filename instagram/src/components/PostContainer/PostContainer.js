import React, { Component } from 'react';

import './PostContainer.css';

import Moment from 'moment';

import CommentSection from './../CommentSection/CommentSection.js';

import HeartIcon from '../../heart.png';
import CommentIcon from '../../comment.png';

class PostContainer extends Component {
  constructor(props) {
    super();
  }

  formatTimestamp(timestamp) {
    // "July 17th 2017, 12:42:40 pm"
    // 2014-06-01T12:00:00Z
    
    const monthNames = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];

    const parts = timestamp.split(" ");
    
    const year = parts[2].substring(0, 4);
    const month = String(monthNames.indexOf(parts[0]) + 1).padStart(2, "0");
    const date = parts[1].match(/\d+/)[0].padStart(2, "0");

    const timeParts = parts[3].split(":");
    const hours = String(parts[4] === "pm" ? 
                          +timeParts[0] + 12 * Number(timeParts[0] !== "12"):
                          +timeParts[0] * Number(timeParts[0] !== "12"))
                    .padStart(2, "0");
    const minutes = timeParts[1].padStart(2, "0");
    const seconds = timeParts[2].padStart(2, "0");

    // return `${year}-${month}-${date}T${hours}:${minutes}:${seconds}`;
    return Moment(`${year}-${month}-${date}T${hours}:${minutes}:${seconds}`).fromNow();
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
        <CommentSection igCommentData={this.props.igPostData.comments} />
        <div className="ig-clone__post__time-passed">{this.formatTimestamp(this.props.igPostData.timestamp)}</div>
      </article>
    );
  }
}

export default PostContainer;