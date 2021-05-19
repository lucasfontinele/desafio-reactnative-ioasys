export interface Portfolio {
  enterprises_number: number;
  enterprises: any[];
}

export interface Investor {
  id: number;
  investor_name: string;
  email: string;
  city: string;
  country: string;
  balance: number;
  photo?: any;
  portfolio: Portfolio;
  portfolio_value: number;
  first_access: boolean;
  super_angel: boolean;
}

export interface IAuthResponse {
  investor: Investor;
  enterprise?: any;
  success: boolean;
}

export interface RequestHeaders {
  accessToken: string;
  client: string;
  uid: string;
}
