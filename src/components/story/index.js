import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Story = ({title, author, url, createdAt, comments = 0, points = 0, active = true}) => {
  const date = new Date(createdAt);
  return (<div className='story'>
    <a href={url} target="_blank" rel="noreferrer">
      <h2 className='title'>{title}</h2>
    </a>
    <p className='information'>Author: {author + ' | '}Points{': ' + points.toString() + ' | ' +
      comments + ' comments | ' +
      'Posted On: ' + date.toDateString()}</p>
  </div>);
};

Story.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  url: PropTypes.string,
  createdAt: PropTypes.string,
  comments: PropTypes.number,
  points: PropTypes.number,
  active: PropTypes.bool,
};
export default Story;
