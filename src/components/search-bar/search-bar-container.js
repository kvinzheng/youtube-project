import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadAllData, setSearchTerm } from '../../redux/actions/index';
import SearchBar from './search-bar';

export const mapStateToProps = (state, ownProps) => ({
  searchTerm: state.search,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  setSearchTerm,
  loadAllData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
