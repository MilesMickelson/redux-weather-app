import { combineReducers } from 'redux';
import searchReducer from './components/Search/searchReducer';

const rootReducer = combineReducers({
  data: searchReducer,
});

export default rootReducer;
