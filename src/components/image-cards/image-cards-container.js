import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImageCard from './image-cards';
import { loadAllData, selectedVideo } from '../../redux/actions/index';

export const mapStateToProps = state => ({
  videoList: state.youtubeData.myData,
  search: state.search
});

export const mapDispatchToProps = dispatch => bindActionCreators({ loadAllData, selectedVideo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ImageCard);
