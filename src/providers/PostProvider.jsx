import React, { useState, createContext, useContext } from 'react';
import update from 'immutability-helper';

import { UserAuthContext } from './UserAuthProvider';

import Fuse from 'fuse.js';

import dummyData from '../dummy-data.js';

export const PostContext = createContext();

function PostProvider(props) {
  const storedPosts = JSON.parse(localStorage.getItem('posts')) || dummyData;

  const [posts, setPosts] = useState([...storedPosts]);
  const [postQueryResults, setPostQueryResults] = useState([...storedPosts]);
  const [postQueryInput, setPostQueryInput] = useState('');
  const [commentInputs, setCommentInputs] = useState(
    Array(storedPosts.length).fill('')
  );

  const { currentUser } = useContext(UserAuthContext);

  const postContext = {
    posts,
    postQueryResults,
    postQueryInput,
    commentInputs,

    generateId() {
      return `${Date.now()}${Math.floor(Math.random() * 100000000)}`;
    },

    searchPosts(query) {
      const updatedPostQueryResults = query
        ? [
            ...new Fuse(posts, {
              shouldSort: false,
              threshold: 0.375,
              minMatchCharLength: 1,
              keys: ['username']
            }).search(query)
          ]
        : [...posts];
      setPostQueryResults(updatedPostQueryResults);
      setPostQueryResults(query);
      setPostQueryInput(query);
      setCommentInputs(Array(updatedPostQueryResults.length).fill(''));
    },

    togglePostHeart(e) {
      const postIndex = posts.findIndex(
        post => post._id === e.currentTarget.dataset._id
      );
      const postQueryResultsIndex = postQueryResults.findIndex(
        post => post._id === e.currentTarget.dataset._id
      );
      const likeIndex = posts[postIndex].likes.findIndex(
        liker => liker === currentUser
      );

      const updatedPosts = update(posts, {
        [postIndex]: {
          likes:
            likeIndex === -1
              ? { $push: [currentUser] }
              : { $splice: [[likeIndex, 1]] }
        }
      });
      const updatedPostQueryResults = update(postQueryResults, {
        [postQueryResultsIndex]: {
          likes:
            likeIndex === -1
              ? { $push: [currentUser] }
              : { $splice: [[likeIndex, 1]] }
        }
      });

      setPosts(updatedPosts);
      setPostQueryResults(updatedPostQueryResults);
    },

    toggleCommentHeart(e) {
      const postIndex = posts.findIndex(
        post => post._id === e.currentTarget.dataset.post_id
      );
      const postCommentIndex = posts[postIndex].comments.findIndex(
        comment => comment._id === e.currentTarget.dataset.comment_id
      );
      const postLikeIndex = posts[postIndex].comments[
        postCommentIndex
      ].likes.findIndex(liker => liker === currentUser);

      const postQueryResultsIndex = postQueryResults.findIndex(
        post => post._id === e.currentTarget.dataset.post_id
      );
      const postQueryResultsCommentIndex = postQueryResults[
        postQueryResultsIndex
      ].comments.findIndex(
        comment => comment._id === e.currentTarget.dataset.comment_id
      );
      const postQueryResultsLikeIndex = postQueryResults[
        postQueryResultsIndex
      ].comments[postQueryResultsCommentIndex].likes.findIndex(
        liker => liker === currentUser
      );

      const updatedPosts = update(posts, {
        [postIndex]: {
          comments: {
            [postCommentIndex]: {
              likes:
                postLikeIndex === -1
                  ? { $push: [currentUser] }
                  : { $splice: [[postLikeIndex, 1]] }
            }
          }
        }
      });
      const updatedPostQueryResults = update(postQueryResults, {
        [postQueryResultsIndex]: {
          comments: {
            [postQueryResultsCommentIndex]: {
              likes:
                postQueryResultsLikeIndex === -1
                  ? { $push: [currentUser] }
                  : { $splice: [[postQueryResultsLikeIndex, 1]] }
            }
          }
        }
      });

      setPosts(updatedPosts);
      setPostQueryResults(updatedPostQueryResults);
    },

    deleteComment(e) {
      const postIndex = posts.findIndex(
        post => post._id === e.currentTarget.dataset.post_id
      );
      const postCommentIndex = posts[postIndex].comments.findIndex(
        comment => comment._id === e.currentTarget.dataset.comment_id
      );

      const postQueryResultsIndex = postQueryResults.findIndex(
        post => post._id === e.currentTarget.dataset.post_id
      );
      const postQueryResultsCommentIndex = postQueryResults[
        postQueryResultsIndex
      ].comments.findIndex(
        comment => comment._id === e.currentTarget.dataset.comment_id
      );

      const updatedPosts = update(posts, {
        [postIndex]: {
          comments: { $splice: [[postCommentIndex, 1]] }
        }
      });
      const updatedPostQueryResults = update(postQueryResults, {
        [postQueryResultsIndex]: {
          comments: { $splice: [[postQueryResultsCommentIndex, 1]] }
        }
      });

      setPosts(updatedPosts);
      setPostQueryResults(updatedPostQueryResults);
    },

    addNewComment(_id, newCommentText) {
      const new_id = postContext.generateId();

      const postIndex = posts.findIndex(post => post._id === _id);
      const postQueryResultsIndex = postQueryResults.findIndex(
        post => post._id === _id
      );

      const updatedPosts = update(posts, {
        [postIndex]: {
          comments: {
            $push: [
              {
                _id: new_id,
                username: currentUser || "Instagram User",
                text: newCommentText,
                likes: []
              }
            ]
          }
        }
      });
      const updatedPostQueryResults = update(postQueryResults, {
        [postQueryResultsIndex]: {
          comments: {
            $push: [
              {
                _id: new_id,
                username: currentUser || "Instagram User",
                text: newCommentText,
                likes: []
              }
            ]
          }
        }
      });

      setPosts(updatedPosts);
      setPostQueryResults(updatedPostQueryResults);
    },

    handleSearchQueryChange(e) {
      postContext.searchPosts(e.currentTarget.value);
    },

    handleCommentInputChange(e) {
      const postIndex = postQueryResults.findIndex(
        post => post._id === e.currentTarget.dataset._id
      );
      const updatedCommentInputs = update(commentInputs, {
        [postIndex]: { $set: e.currentTarget.value }
      });

      setCommentInputs(updatedCommentInputs);
    },

    handleKeyDownOnCommentInput(e) {
      if ((e.keyCode || e.which) === 13 && !e.shiftKey) {
        e.preventDefault();

        const newCommentText = e.currentTarget.value;

        const postIndex = postQueryResults.findIndex(
          post => post._id === e.currentTarget.dataset._id
        );
        const updatedCommentInputs = update(commentInputs, {
          [postIndex]: { $set: '' }
        });

        setCommentInputs(updatedCommentInputs);

        postContext.addNewComment(e.currentTarget.dataset._id, newCommentText);
      }
    }
  };

  return (
    <PostContext.Provider value={postContext}>
      {props.children}
    </PostContext.Provider>
  );
}

export default PostProvider;
