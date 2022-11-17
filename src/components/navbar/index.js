import React from 'react';
import './styles.css';
import Maginifier from '../../icons/magnifier.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (<div className='navbar'>
    <div></div>
    <h1>Hacker News</h1>
    <Link to='/search'>
      <div className='search-button'>
        <img src={Maginifier} alt='search icon' className='search-icon' /><p>Search</p>
      </div>
    </Link>
  </div>);
};

export default Navbar;
