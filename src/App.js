import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        {/* //TO-DO
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};


export default App;
