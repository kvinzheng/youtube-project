import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ImageCard from './image-cards';
import {selectedVideo} from '../../redux/actions/index';

export const mapStateToProps = state => ({
  videoList: state.youtubeData.myData
    ? state.youtubeData.myData.items
    : []
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  selectedVideo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ImageCard);
