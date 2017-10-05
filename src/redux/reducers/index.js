import { combineReducers } from 'redux';
import youtubeData from './youtube-data';
import search from './search.js';
import selectedVideo from './selectedVideo.js';

const rootReducer = combineReducers({
  search,
  selectedVideo,
  youtubeData,
});

export default rootReducer;