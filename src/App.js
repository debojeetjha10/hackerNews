import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage';
import SearchPage from './pages/searchPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />}/>
        <Route path="/search" exact element={<SearchPage />} />
        {/* //TO-DO
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};


export default App;
