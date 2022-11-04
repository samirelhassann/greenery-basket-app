/* eslint-disable react/prop-types */

import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontFamily: "MontSerratRegular",
  },
  boldText: {
    fontFamily: "MontSerratBold",
    fontWeight: "normal",
  },
});

function TextData({ children, style }) {
  return (
    <Text
      style={[
        style,
        style?.fontWeight === "bold" ? styles.boldText : styles.text,
      ]}
    >
      {children}
    </Text>
  );
}

export default TextData;
