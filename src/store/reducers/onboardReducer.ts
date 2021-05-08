import { ONBOARD_CHANGE } from '../constants';

const initialState = {
  hasOnboarded: false,
};

export const onboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ONBOARD_CHANGE:
      return {
        ...state,
        hasOnboarded: true,
      };
    default:
      return state;
  }
};
