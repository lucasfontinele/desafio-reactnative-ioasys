import { InvestorState, InvestorActions, HANDLE_INVESTOR } from './types';

const initialState: InvestorState = {
};

export default function reducer(
  state = initialState,
  action: InvestorActions
): InvestorState {
  switch (action.type) {
    case HANDLE_INVESTOR:
      return { ...state, investor: action.payload };
    default:
      return state;
  }
}
