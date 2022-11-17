import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import Maginifier from '../../icons/magnifier.png';
import newsPaperLogo from '../../icons/news.png';

const Navbar = () => {
  return (<div className='navbar'>
    <Link to='/' onClick={() => window.location.reload()}>
      <div className='logo'>
        <h1><img className='newspaper-logo' src={newsPaperLogo} alt='Logo' />Hacker News</h1>
      </div>
    </Link>
    <Link to='/search'>
      <div className='search-button'>
        <img src={Maginifier} alt='search icon' className='search-icon' /><p>Search</p>
      </div>
    </Link>
  </div>);
};

export default Navbar;
