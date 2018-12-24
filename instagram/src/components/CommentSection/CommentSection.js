import React from 'react';

import './CommentSection.css';

const CommentSection = props => {
  return (
    <div className="ig-clone__post__comments">
      {props.igCommentData.map(comment => 
        <div key={comment.id} className="ig-clone__post__comments__item">
          <span className="ig-clone__post__comments__item__acct">{comment.username}</span> {comment.text}
        </div>
      )}
    </div>
  );
}

export default CommentSection;