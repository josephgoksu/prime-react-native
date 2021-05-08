import { AUTH_CHANGE, LOGOUT_USER } from '../constants';

const initialState = {
  loggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT_USER:
      return {
        state: undefined,
      };
    default:
      return state;
  }
};
