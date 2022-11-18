import {BASE_URL_SEARCH_BY_DATE, BASE_URL_SEARCH_BY_PREF} from '../const';

const getSearchedStories = (tag, query, createdATStart, createdAtEnd, sortByDate = true, page = 0) => {
  let queryTag = '';
  if (tag === 'all') {
    queryTag = '(story,comment)';
  } else queryTag = tag;

  if (sortByDate) {
    return BASE_URL_SEARCH_BY_DATE +
            `?query=${query}&tags=${queryTag}&numericFilters=created_at_i<${createdAtEnd/1000},` +
            `created_at_i>${createdATStart/1000}&page=${page}`;
  }
  return BASE_URL_SEARCH_BY_PREF +
    `?query=${query}&tags=${queryTag}&numericFilters=created_at_i<${createdAtEnd / 1000},` +
    `created_at_i>${createdATStart / 1000}&page=${page}`;
};

export default getSearchedStories;
