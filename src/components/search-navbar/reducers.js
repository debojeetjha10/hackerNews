import {CHANGE_SEARCH_URL} from './constants';

const searchURLReducer = (state='', action)=>{
  switch (action.type) {
    case CHANGE_SEARCH_URL:
      return action.payload;
    default:
      return '';
  }
};

export default searchURLReducer;
