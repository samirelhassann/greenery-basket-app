/* eslint-disable react/prop-types */
import React from "react";
import {
  Image, StyleSheet, Text, TouchableOpacity, View,
} from "react-native";

import TextData from "../../../components/TextData";

const styles = StyleSheet.create({
  basketName: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "MontSerratBold",
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "MontSerratRegular",
  },
  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  farmInfoContainer: {
    flexDirection: "row",
    paddingVertical: 8,
  },
  farmLogoImage: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  button: {
    marginTop: 26,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 12,
    width: 300,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonLabel: {
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    fontSize: 24,
  },
});

function Details({
  basketName,
  farmLogo,
  farmName,
  description,
  price,
  buttonLabel,
}) {
  return (
    <>
      <TextData style={styles.basketName}>{basketName}</TextData>
      <View style={styles.farmInfoContainer}>
        <Image source={farmLogo} style={styles.farmLogoImage} />
        <Text style={styles.farmName}>{farmName}</Text>
      </View>
      <TextData style={styles.description}>{description}</TextData>
      <Text style={styles.price}>{price}</Text>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <TextData style={styles.buttonLabel}>{buttonLabel}</TextData>
      </TouchableOpacity>
    </>
  );
}

export default Details;
