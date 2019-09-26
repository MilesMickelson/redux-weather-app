import { connect } from 'react-redux';
import Search from './search';

function mapStoreToProps(store) {
  return{
    searchTarget: store.search.searchTarget
  };
}

export default connect(mapStoreToProps)(Search);
