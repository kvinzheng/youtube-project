import { connect } from 'react-redux';
import SearchResults from './search-results';
// import { searchForImages } from '../../redux/actions/index';
export const mapStateToProps = state => ({
  videos: state.youtubeData.myData,
  status: state.youtubeData.status,
});

export default connect(mapStateToProps)(SearchResults);
