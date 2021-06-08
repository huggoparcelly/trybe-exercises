import { USER_LOGIN } from '../actions';

const INITIAL_STATE = {};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_LOGIN:
      return action.value;
    default:
      return state;
  }
};

export default loginReducer;
