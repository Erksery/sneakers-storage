import {
  DarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../store/store";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useColorScheme } from "@/hooks/useColorScheme";
import { UserProvider } from "../components/context/UserData.jsx";
import AboutHeader from "@/components/layouts/headers/AboutHeader";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isReady, setIsReady] = useState(false);
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Peninim: require("../assets/fonts/Peninim.ttf"),
    NunitoBlack: require("../assets/fonts/Nunito-Black.ttf"),
    NunitoBold: require("../assets/fonts/Nunito-Bold.ttf"),
    NunitoSemiBold: require("../assets/fonts/Nunito-SemiBold.ttf"),
    NunitoRegular: require("../assets/fonts/Nunito-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      setTimeout(async () => {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }, 3000);
    }
  }, [loaded]);

  if (!isReady) {
    return (
      <LinearGradient
        colors={["#48B2E7", "#0076B1"]}
        style={styles.splashContainer}
      >
        <View style={styles.splashTextContainer}>
          <Text style={styles.splashText}>MATULE</Text>
          <Text style={styles.subSplashText}>ME</Text>
        </View>
      </LinearGradient>
    );
  }

  const lightTheme = {
    ...NavigationDefaultTheme,
    ...MD3LightTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...MD3LightTheme.colors,
      primary: "#48B2E7",
    },
  };

  const currentTheme = lightTheme;

  return (
    <Provider store={store}>
      <UserProvider>
        <ThemeProvider value={currentTheme}>
          <PaperProvider theme={currentTheme}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(drawer)" />
              <Stack.Screen name="+not-found" />
              <Stack.Screen name="registration" />
              <Stack.Screen name="auth" />
              <Stack.Screen name="onboard" />
              <Stack.Screen name="forgot" />
              <Stack.Screen
                name="product/[product]"
                options={{
                  headerShown: true,
                  header: () => <AboutHeader title="Sneakers Shop" />,
                }}
              />
              <Stack.Screen
                name="popular"
                options={{
                  headerShown: true,
                  header: () => <AboutHeader title="Популярное" />,
                }}
              />
            </Stack>
            <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
          </PaperProvider>
        </ThemeProvider>
      </UserProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  splashTextContainer: {
    flexDirection: "row",
    gap: 5,
  },
  splashText: {
    fontSize: 42,
    fontWeight: 700,
    color: "white",
  },
  subSplashText: {
    textAlignVertical: "top",
    fontSize: 15,
    color: "white",
  },
});
