import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadAllData } from '../../redux/actions/index';
import SearchBar from './search-bar';

export const mapDispatchToProps = dispatch => bindActionCreators({
  loadAllData,
}, dispatch);

export default connect(null, mapDispatchToProps)(SearchBar);
