import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      shape: string;
      red: string;
      blue: string;
      'blue-light': string;
      green: string;
      'text-title': string;
      'text-body': string;
    };
  }
}
