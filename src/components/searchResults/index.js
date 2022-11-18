import React, {useEffect, useState} from 'react';
import Story from '../story';
import Comment from '../comment';
import Loading from '../loading';
import './styles.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import {useSelector} from 'react-redux';

const SearchResults = () => {
  const [isLoading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(0);
  const [prevButton, setPreButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const URL = useSelector((store) => store.searchURL);

  useEffect(() => {
    setPreButton(true);
    setNextButton(true);
    console.log(URL);
    setLoading(true);
    axios.get(URL).then((data) => {
      setLoading(false);
      setStories(data.data.hits);


      if (page <= 0) setPreButton(true);
      else setPreButton(false);
      if (page + 1 >= data.data.nbPages) setNextButton(true);
      else {
        setNextButton(false);
      }
    }).catch((err)=>{
      console.log(err);
      return;
    });
  }, [URL]);
  console.log(URL);
  return <>
    {isLoading ? <Loading /> :
            <ol className='stories'>
              {stories.map((element) => {
                if (element._tags[0] === 'story') {
                  return <li key={element.objectID}><Story
                    title={element.title} author={element.author}
                    url={element.url}
                    createdAt={element.created_at}
                    comments={element.num_comments}
                    points={element.points}
                  /></li>;
                }
                if (element._tags[0] === 'comment') {
                  return <li key={element.objectID}>
                    <Comment
                      commentText={element.comment_text}
                      storyUrl={element.story_url}
                      points={element.points?element.points:0}
                      createdAt={element.created_at}
                      author={element.author}
                    />
                  </li>;
                }
                return null;
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

SearchResults.propTypes = {
  page: PropTypes.number,
  URL: PropTypes.string,
};
export default SearchResults;
