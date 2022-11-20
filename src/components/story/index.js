import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Highlighter from 'react-highlight-words';
import './styles.css';
import {useSelector} from 'react-redux';
import getBaseURL from '../../helpers/getBaseURL';
import isTruth from '../../helpers/isTruth';

const Story = ({title, author, url, createdAt, objectId, comments = 0, points = 0, highlighted = false}) => {
  const [alreadyVisited, setAlreadyVisited] = useState(localStorage.getItem(objectId) && isTruth(url));

  const date = new Date(createdAt);
  const query = useSelector((store) => store.searchQuery);

  return (<div className={`story ${alreadyVisited ? 'opace' : ''}`}>
    <a href={url} target="_blank" rel="noreferrer" onClick={() => {
      if (!isTruth(url)) return;
      localStorage.setItem(objectId, true);
      setAlreadyVisited(true);
    }}>
      <div className='story-title'>
        <h3 className='title'> {(query !== '' && highlighted) ? <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[query]}
          autoEscape={true}
          textToHighlight={title}
        /> : title}</h3>
        {(url === '' || !url) ? null : <p>{`(${getBaseURL(url)})`}</p>}
      </div>
    </a>
    <p className='information'>Author: {author + ' | '}Points{': ' + points.toString() + ' | ' +
      comments + ' comments | ' +
      'Posted On: ' + date.toDateString()}</p>
    {alreadyVisited && <i>previously visited</i>}
  </div>);
};

Story.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  url: PropTypes.string,
  createdAt: PropTypes.string,
  comments: PropTypes.number,
  points: PropTypes.number,
  objectId: PropTypes.string,
  highlighted: PropTypes.bool,
};
export default Story;
