import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage';
import SearchPage from './pages/searchPage';
import {configureStore} from '@reduxjs/toolkit';
import allReducers from './reducers';

const store = configureStore({reducer: allReducers});

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/search" exact element={<SearchPage />} />
          {/* //TO-DO
          <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};


export default App;
