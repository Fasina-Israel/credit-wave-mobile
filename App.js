import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./src/screens/onBoard/landingPage/index";
import useFonts from "./src/hooks/useFonts";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AuthenticationScreen from "./src/screens/auth/index";
export default function App() {
  const [isAppReady, setAppReady] = useState(false);
  const Stack = createNativeStackNavigator();
  const LoadFonts = async () => {
    await useFonts();
  };

  useEffect(() => {
    // Simulate loading resources (you can replace this with your actual resource loading logic)
    setTimeout(() => {
      setAppReady(true);
    }, 3000); // Simulating a 3-second loading time
    LoadFonts();
  }, []);
  if (!isAppReady) {
    return (
      <View style={styles.container}>
        <Image
          source={require("./src/assets/spalsh/CreditWaveLogo.png")} // Replace with your splash screen image path
          style={styles.splashImage}
        />
      </View>
    );
  }

  return (
    // Your main app component here
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LandingPage"
            component={LandingScreen}
            options={{ title: "LandingPage", headerShown: false }}
          />
           <Stack.Screen
            name="AuthenticationPage"
            component={AuthenticationScreen}
            options={{ title: "AuthenticationPage", headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
