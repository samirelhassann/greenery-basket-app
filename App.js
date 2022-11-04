/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */

import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

import mock from "./src/mocks/basket";
import Basket from "./src/pages/Basket/Basket";

export default function App() {
  const [loadedFont] = useFonts({
    MontSerratRegular: Montserrat_400Regular,
    MontSerratBold: Montserrat_700Bold,
  });

  if (!loadedFont) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Basket {...mock} />
    </SafeAreaView>
  );
}
