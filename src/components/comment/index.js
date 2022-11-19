import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const Comment = ({commentText, points, storyUrl, author, createdAt, highlighted=false}) => {
  const date = new Date(createdAt);
  const query = useSelector((store) => store.searchQuery);

  return (<div className='comments'>
    <h3>Comment:</h3>
    <div dangerouslySetInnerHTML={{
      __html: (query !== '' && highlighted) ? commentText.replace(new RegExp(`${query}`, 'ig'),
          `<span style="background-color:yellow"> ${query}</span>`) : commentText,
    }} />
    <p className='information'><b>Author: {author + ' | '}Points{': ' + points.toString() + ' | ' +
      'Posted On: ' + date.toDateString()}</b></p>
    {(storyUrl !== '' && storyUrl !== undefined && storyUrl !== null) ?
      <a href={storyUrl} className='story-url'><i>Story Link: {storyUrl}</i></a> : null}
  </div>);
};

Comment.propTypes = {
  commentText: PropTypes.string,
  points: PropTypes.number,
  storyUrl: PropTypes.string,
  author: PropTypes.string,
  createdAt: PropTypes.string,
  highlighted: PropTypes.bool,
};
export default Comment;
