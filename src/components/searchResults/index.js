import React from 'react';
import Story from '../story';
import Comment from '../comment';
import Loading from '../loading';
import './styles.css';
import PropTypes from 'prop-types';

const SearchResults = ({stories, isLoading, totalPages, page, setPage}) => {
  const prevButton = page<0;
  const nextButton = page>=(totalPages-1);

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
                      points={element.points}
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
  stories: PropTypes.array,
  isLoading: PropTypes.bool,
  totalPages: PropTypes.number,
  page: PropTypes.number,
  setPage: PropTypes.func,
};
export default SearchResults;
