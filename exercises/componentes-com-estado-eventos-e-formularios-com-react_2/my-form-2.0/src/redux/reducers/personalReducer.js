const INITIAL_STATE = {
    name: '',
		email: '',
		cpf: '',
		address: '',
		city: '',
		'state': '',
}

function personalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NAME':
      return {
        ...state,
        name: action.value,
      }
    case 'EMAIL':
      return {
        ...state,
        email: action.value,
      }
    case 'CPF':
      return {
        ...state,
        cpf: action.value,
      }
    case 'ADDRESS':
      return {
        ...state,
        address: action.value,
      }
    case 'CITY':
      return {
        ...state,
        city: action.value,
      }
    case 'STATE':
      return {
        ...state,
        'state': action.value,
      }
    default:
      return state;
  }
}

export default personalReducer;
