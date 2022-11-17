import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Comment = ({commentText, points, storyUrl, author, date}) => {
  date = new Date(date);
  return (<div>
    <h3>{commentText}</h3>
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
  date: PropTypes.string,
};
export default Comment;
