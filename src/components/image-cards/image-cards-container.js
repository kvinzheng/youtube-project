import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import ImageCard from './image-cards';
import {selectedVideo} from '../../redux/actions/index';

export const mapStateToProps = state => {
  // console.log('state.youtubeData.myData',state.youtubeData.myData);
  return {
    videoList: state.youtubeData.myData
      ? state.youtubeData.myData.items
      : []
  }
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  selectedVideo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ImageCard));
