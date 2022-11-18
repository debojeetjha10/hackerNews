import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Comment = ({commentText, points, storyUrl, author, createdAt}) => {
  const date = new Date(createdAt);
  return (<div>
    <div dangerouslySetInnerHTML={{__html: commentText}} />
    <p className='information'>Author: {author + ' | '}Points{': ' + points.toString() + ' | ' +
            'Posted On: ' + date.toDateString()}</p>
    <a href={storyUrl}>Story Link: {storyUrl}</a>
  </div>);
};

Comment.propTypes = {
  commentText: PropTypes.string,
  points: PropTypes.number,
  storyUrl: PropTypes.string,
  author: PropTypes.string,
  createdAt: PropTypes.string,
};
export default Comment;
