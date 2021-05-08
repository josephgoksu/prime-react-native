export const ONBOARD_CHANGE = 'ONBOARD_CHANGE';

export interface iSuperOnboard {
  onboard: iOnboard;
}

export interface iOnboard {
  hasOnboarded: boolean;
}

const initialState: iOnboard = {
  hasOnboarded: false,
};

export const onboardReducer = (state = initialState, action: any) => {
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
