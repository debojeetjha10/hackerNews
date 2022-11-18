import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import getDateString from '../../helpers/getDateString';
import newsPaper from '../../icons/news.png';
import getSearchedStories from '../../helpers/getSearchedStories';
import './styles.css';
import {useDispatch} from 'react-redux';
import {CHANGE_SEARCH_URL} from './constants';

const changeURL = (URL) => {
  return {
    type: CHANGE_SEARCH_URL,
    payload: URL,
  };
};

const SearchNavbar = () => {
  const tags = ['story', 'comment', 'all'];
  const sortOptions = ['Date', 'Popularity'];
  const dispatch = useDispatch();

  const [query, setQuery] = useState('');
  const [err, setErr] = useState('');
  const [searchTag, setSearchTag] = useState(tags[0]);
  const [sortby, setSortBy] = useState(sortOptions[0]);
  const [fromDate, setFromDate] = useState(getDateString(new Date(Date.now() - 3600 * 24 * 1000)));
  const [toDate, setToDate] = useState(getDateString(new Date(Date.now())));

  const onSubmit = (e) => {
    e.preventDefault();
    const searchBYDate = sortby === 'Date';
    const createdATStart = Date.parse(fromDate);
    const createdATEnd = Date.parse(toDate) + 3600 * 100;
    if (createdATStart >= createdATEnd) {
      setErr('Select a valid date range.');
      return;
    } else setErr('');
    const URL = getSearchedStories(searchTag, query, createdATStart, createdATEnd, searchBYDate, 0);
    dispatch(changeURL(URL));
  };

  return (<div className='search-navbar'>
    <div className='logo-query-box'>
      <Link to='/search' onClick={() => window.location.reload()} className='width-30vw text-left'>
        <div className='logo'>
          <h2><img className='newspaper-logo' src={newsPaper} alt='LOGO' />Search Hacker News</h2>
        </div>
      </Link>
      <form onSubmit={onSubmit}>
        <input type='text' value={query} onChange={(e) => {
          e.preventDefault();
          setQuery(e.target.value);
        }} className='query-box' placeholder='Enter Query' />
      </form>
      <Link to='/' className='width-30vw text-right'>
        <h2>Go to Home</h2>
      </Link>
    </div>
    <div className='filters'>
      <label>
        Search
        <select value={searchTag} onChange={(e) => setSearchTag(e.target.value)}>
          {tags.map((tag) => {
            return <option key={tag} value={tag}>{tag}</option>;
          })}
        </select>
      </label>
      <label>
        By
        <select value={sortby} onChange={(e) => setSortBy(e.target.value)}>
          {sortOptions.map((option) => {
            return <option key={option} value={option}>{option}</option>;
          })}
        </select>
      </label>
      <label>
        from
        <input value={fromDate} onChange={(e) =>
          setFromDate(e.target.value)
        } type='Date' />
      </label>
      <label>
        to
        <input value={toDate} onChange={(e) =>
          setToDate(e.target.value)} type='Date' />
      </label>
    </div>
    {(err !== '') && <p className='err'>{err}</p>}
  </div>);
};

export default SearchNavbar;
