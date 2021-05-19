import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_DATA = '@ioasys-user-data';

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

export const setUserData = async (user: Investor) => {
  AsyncStorage.setItem(USER_DATA, JSON.stringify(user));
}

export const getUserData = async (): Promise<Investor | null> => {
  const userData = await AsyncStorage.getItem(USER_DATA);

  if (!userData) {
    return null;
  }

  const parsedData = JSON.parse(userData);

  return parsedData as Investor;
};
