export const AUTH_CHANGE = 'AUTH_CHANGE';
export const LOGOUT_USER = 'LOGOUT_USER';

export interface iSuperAuth {
  Auth: iAuth;
}

export interface iAuth {
  loggedIn: boolean;
}

const initialState: iAuth = {
  loggedIn: false,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT_USER:
      return {};

    default:
      return state;
  }
};
