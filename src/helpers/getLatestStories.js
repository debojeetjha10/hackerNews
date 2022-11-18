import axios from 'axios';
import {BASE_URL_SEARCH_BY_DATE} from '../const';

const getLatestStories = async (page = 0, createdAtLessThan = Date.now()/1000) => {
  const URL = BASE_URL_SEARCH_BY_DATE +
    `?tags=story&&numericFilters=created_at_i<${createdAtLessThan}&page=${page}`;
  const res = await axios.get(URL);
  return res.data;
};

export default getLatestStories;
