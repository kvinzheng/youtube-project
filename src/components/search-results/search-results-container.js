import { connect } from 'react-redux';
import SearchResults from './search-results';
import { bindActionCreators } from 'redux';
import { loadAllData } from '../../redux/actions/index';export const mapStateToProps = state => ({
  videos: state.youtubeData.myData,
  status: state.youtubeData.status,
});

export const mapDispatchToProps = dispatch => bindActionCreators({ loadAllData }, dispatch);

export default connect(mapStateToProps)(SearchResults);
