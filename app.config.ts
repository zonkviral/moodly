import { ExpoConfig, ConfigContext } from "expo/config"

const IS_PRODUCTION = process.env.NODE_ENV === "production"

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Moodly",
  slug: "moodly",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./src/assets/images/icon.png",
  scheme: "moodly",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: IS_PRODUCTION ? "com.yourcompany.moodly" : "com.yourcompany.moodly.dev",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./src/assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: IS_PRODUCTION ? "com.yourcompany.moodly" : "com.yourcompany.moodly.dev",
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./src/assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./src/assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    "expo-font",
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    // Supabase Configuration
    supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
    supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,

    // RevenueCat Configuration
    revenueCatApiKey: process.env.EXPO_PUBLIC_REVENUECAT_API_KEY,

    // Environment
    environment: process.env.NODE_ENV,

    //EAS
    eas: {
      projectId: "ec88b697-34d3-4305-bde4-fcc99aecce6a",
    },
  },
})
