import { ONBOARD_CHANGE } from '../reducers';

interface Onboard {
  hasOnboarded: boolean;
}
export const changeOnboard = (payload: Onboard) => ({
  type: ONBOARD_CHANGE,
  payload: payload,
});
