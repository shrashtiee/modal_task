import { combineReducers } from 'redux';
import checkNetwork from './checkNetwork';

const rootReducer = combineReducers({       
  checkNetwork,         
});

export default rootReducer;
