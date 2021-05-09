import { Config as RNConfig } from 'react-native-config';

interface iConfig {
  API_URL: string;
}

export const configuration: iConfig = {
  API_URL: RNConfig.API_URL,
};
