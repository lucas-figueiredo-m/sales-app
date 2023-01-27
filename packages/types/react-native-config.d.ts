declare module 'react-native-config' {
  interface ReactNativeConfigEnv {
    ENVIRONMENT: string
    API_URL: string
  }

  const config: ReactNativeConfigEnv

  export default config
}
