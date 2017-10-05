import {connect} from 'react-redux';
import VideoPlayer from './video-player';
import {withRouter} from 'react-router-dom';

export const mapStateToProps = state => ({
  status: state.selectedVideo.status
    ? state.selectedVideo.status
    : 'PENDING',
  id: state.selectedVideo.video
    ? state.selectedVideo.video.id.videoId
    : '0',
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

export default connect(mapStateToProps, null)(withRouter(VideoPlayer));
