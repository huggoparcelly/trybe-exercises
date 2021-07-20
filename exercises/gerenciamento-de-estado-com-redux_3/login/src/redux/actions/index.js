export const USER_LOGIN = 'USER_LOGIN';
export const REGISTER_CLIENT = 'REGISTER_CLIENT';


export const loginAction = (value) => ({ 
  type: USER_LOGIN,
  value,
});

export const registerAction = (value) => ({
  type: REGISTER_CLIENT,
  registerClient: value,
});
