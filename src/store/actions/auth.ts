import { AUTH_CHANGE, LOGOUT_USER } from '../reducers';

interface Auth {
  loggedIn: boolean;
  user?: User;
  userSession?: UserSession;
}

interface User {
  username: string;
  fullname: string;
  email_verified: boolean;
  email: string;
}

interface UserSession {
  idToken: {};
}

export const changeAuth = (payload: Auth) => ({
  type: AUTH_CHANGE,
  payload,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
