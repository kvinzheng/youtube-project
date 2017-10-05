import {connect} from 'react-redux';
import SearchResults from './search-results';
import {bindActionCreators} from 'redux';
import {loadAllData} from '../../redux/actions/index';
export const mapStateToProps = state => ({
  video: state.selectedVideo.video,
  status: state.selectedVideo.status,
  id: state.selectedVideo.video
    ? state.selectedVideo.video.id.videoId
    : 0,
  title: state.selectedVideo.video
    ? state.selectedVideo.video.snippet.title
    : 'title',
  channelTitle: state.selectedVideo.video
    ? state.selectedVideo.video.snippet.channelTitle
    : 'channelTitle',
  description: state.selectedVideo.video
    ? state.selectedVideo.video.snippet.description
    : 'description'
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  loadAllData
}, dispatch);

export default connect(mapStateToProps)(SearchResults);
