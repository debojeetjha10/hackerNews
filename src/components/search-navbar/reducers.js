import {CHANGE_QUERY, CHANGE_SEARCH_URL} from './constants';

const searchURLReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_SEARCH_URL:
      return action.payload;
    default:
      return state;
  }
};

const searchQueryReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_QUERY:
      return action.payload;
    default:
      return state;
  }
};

export {
  searchURLReducer,
  searchQueryReducer,
};
