const INITIAL_STATE = {
    curriculum: '',
		officer: '',
		description: '',
}

function professionalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CURRICULUM':
      return {
        ...state,
        curriculum: action.value,
      };
    case 'OFFICER':
      return {
        ...state,
        officer: action.value,
      };
    case 'DESCRIPTION':
      return {
        ...state,
        description: action.value,
      };
    default:
      return state;
  }
}

export default professionalReducer;
