import React, {useState} from 'react';
import Story from '../story';
import Loading from '../loading';
import './styles.css';
import getLatestStories from '../../helpers/getLatestStories';
import PropTypes from 'prop-types';

const StoryPage = ({page}) => {
  const [isLoading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);

  useState(async () => {
    const data = await getLatestStories(page);
    setLoading(false);
    setStories(data);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return <ol className='stories'>
    {stories.map((element) => {
      return <li key={element.objectID}><Story
        title={element.title} author={element.author}
        url={element.url}
        createdAt={element.created_at}
        points={element.points}
      /></li>;
    })}
  </ol>;
};

StoryPage.propTypes = {
  page: PropTypes.number,
};
export default StoryPage;
