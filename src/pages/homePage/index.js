import React from 'react';
import './styles.css';
import Navbar from '../../components/navbar';
import StoryPage from '../../components/storyPage';

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <StoryPage page={0}/>
    </>
  );
};

export default HomePage;
