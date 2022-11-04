/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from "react";
import { Image, StyleSheet, View } from "react-native";

import TextData from "../../../components/TextData";

const styles = StyleSheet.create({
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: "#2A9F85",
  },
  itemName: {
    fontSize: 18,
    marginLeft: 10,
  },
});

function Item({ item: { name, image } }) {
  return (
    <View style={styles.item}>
      <Image source={image} />
      <TextData style={styles.itemName}>{name}</TextData>
    </View>
  );
}

export default Item;
