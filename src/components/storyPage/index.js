import React, {useEffect, useState} from 'react';
import Story from '../story';
import Loading from '../loading';
import './styles.css';
import getLatestStories from '../../helpers/getLatestStories';
import PropTypes from 'prop-types';

const StoryPage = ({ }) => {
  const [isLoading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(0);
  const [prevButton, setPreButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);

  useEffect(() => {
    const asyncfn = async () => {
      setPreButton(true);
      setNextButton(true);

      setLoading(true);
      const data = await getLatestStories(page);
      setLoading(false);
      setStories(data.hits);

      if (page <= 0) setPreButton(true);
      else setPreButton(false);
      if (page + 1 >= data.nbPages) setNextButton(true);
      else {
        setNextButton(false);
      }
    };
    asyncfn();
  }, [page]);

  return <>
    {isLoading ? <Loading /> :
      <ol className='stories'>
        {stories.map((element) => {
          return <li key={element.objectID}><Story
            title={element.title} author={element.author}
            url={element.url}
            createdAt={element.created_at}
            comments={element.num_comments}
            points={element.points}
            objectId={element.objectID.toString()}
          /></li>;
        })}
      </ol>
    }
    <div className='page-changer'>
      <button onClick={() => setPage((page) => page - 1)} disabled={prevButton}>&lt;previous poge</button>
      <p className='page-number'>{page}</p>
      <button onClick={() => setPage((page) => page + 1)} disabled={nextButton}>next page&gt;</button>
    </div>
  </>;
};

StoryPage.propTypes = {
  page: PropTypes.number,
};
export default StoryPage;
