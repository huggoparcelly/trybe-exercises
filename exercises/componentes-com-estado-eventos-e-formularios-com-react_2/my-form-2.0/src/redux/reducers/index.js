import { combineReducers } from 'redux';
import personalReducer from './personalReducer';
import professionalReducer from './professionalReducer';

const rootReducer = combineReducers({
  personalInfo: personalReducer,
  professionalInfo: professionalReducer,
});

export default rootReducer;
