import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideBar from './video-sidebar';
import { loadAllData } from '../../redux/actions/index';

export const mapStateToProps = state => ({
  videoList: state.youtubeData.myData,
  search: state.search
});

export const mapDispatchToProps = dispatch => bindActionCreators({ loadAllData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
