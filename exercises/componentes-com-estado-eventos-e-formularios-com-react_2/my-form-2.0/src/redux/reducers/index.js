import { combineReducers } from 'redux';
import infosReducer from './infosReducer';
import personalReducer from './personalReducer';
import professionalReducer from './professionalReducer';

const rootReducer = combineReducers({
  personalInfo: personalReducer,
  professionalInfo: professionalReducer,
  resumeInfos: infosReducer,
});

export default rootReducer;
