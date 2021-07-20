import { REGISTER_CLIENT } from '../actions';

const INITIAL_STATE = [];

function registerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER_CLIENT:
      return [
        ...state,
        action.registerClient,
      ];
    default:
      return state;
  }
};

export default registerReducer;