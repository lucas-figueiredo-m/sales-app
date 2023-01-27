declare module 'react-native-config' {
  interface ReactNativeConfigEnv {
    API_URL: string;
    ENABLE_API_LOGS: boolean;
  }

  const config: ReactNativeConfigEnv;

  export default config;
}
