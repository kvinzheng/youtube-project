import { combineReducers } from 'redux';
import youtubeData from './youtube-data';
import search from './search.js';
import selectedVideo from './selected-video.js';

const rootReducer = combineReducers({
  search,
  selectedVideo,
  youtubeData,
});

export default rootReducer;
