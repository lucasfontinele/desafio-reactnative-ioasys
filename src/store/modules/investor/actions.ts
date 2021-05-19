import { HANDLE_INVESTOR, InvestorActions, Investor } from './types';

export const handleInvestor = (investor: Investor): InvestorActions => {
  return {
    type: HANDLE_INVESTOR,
    payload: investor,
  }
};
