import { combineReducers } from 'redux';
import youtubeData from './youtube-data';
import search from './search';
import selectedVideo from './selected-video';

const rootReducer = combineReducers({
  search,
  selectedVideo,
  youtubeData,
});

export default rootReducer;
