import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import StoryPage from './components/storyPage';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <StoryPage page={0}/>
    </div>
  );
};

export default App;
