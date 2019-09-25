import { combineReducers } from 'redux';
import searchReducer from './components/Search/searchReducer';
import infoReducer from './components/Information/infoReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  info: infoReducer,
});

export default rootReducer;
