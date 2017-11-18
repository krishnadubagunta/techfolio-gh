import { combineReducers } from 'redux';
import userReducer from './user';
import gitViewer from './viewer';

const rootReducer = combineReducers({
  user: userReducer,
  viewer: gitViewer
});

export default rootReducer;
