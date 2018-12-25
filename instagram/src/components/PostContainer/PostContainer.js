import React, { Component } from 'react';

import './PostContainer.css';

import Moment from 'moment';

import CommentSection from './../CommentSection/CommentSection.js';

import HeartIcon from '../../heart.png';
import CommentIcon from '../../comment.png';
import MoreOptionsIcon from '../../more-options.png';

class PostContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      igPostData: props.igPostData
    }
  }

  formatTimestamp(timestamp) {
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

    return Moment(`${year}-${month}-${date}T${hours}:${minutes}:${seconds}`).fromNow();
  }

  handleKeypressOnCommentArea(e) {
    if (e.keyCode === 13 && e.currentTarget.value.trim()) {
      this.appendNewComment(e.currentTarget.value)
      e.currentTarget.value = "";
      e.currentTarget.blur();
    }
  }

  fitCommentHeight(e) {
    e.currentTarget.style.height = "1px";
    e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
  }

  appendNewComment(text) {
    const updateIgPostData = this.state.igPostData;

    updateIgPostData.comments.push({
      id: Math.ceil(Math.random() * 8999999999 + 1000000000),
      username: "anon",
      text: text
    });

    this.setState({igPostData: updateIgPostData});
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
        <CommentSection igCommentData={this.state.igPostData.comments} />
        <div className="ig-clone__post__time-passed">{this.formatTimestamp(this.props.igPostData.timestamp)}</div>
        <div className="ig-clone__post__new-comment">
          <textarea className="ig-clone__post__new-comment__input" placeholder="Add a comment..." onKeyDown={e => this.handleKeypressOnCommentArea(e)} onBlur={e => this.fitCommentHeight(e)}></textarea>
          <input className="ig-clone__post__new-comment__more-icon" type="image" src={MoreOptionsIcon} alt="More Options"/>
        </div>
      </article>
    );
  }
}

export default PostContainer;