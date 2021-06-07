import React from "react";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes";

import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular,
  Inter_500Medium,
  Inter_300Light,
} from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_700Bold,
    Inter_500Medium,
    Inter_400Regular,
    Inter_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar backgroundColor={"#32a852"} />
      <Routes />
    </>
  );
}
