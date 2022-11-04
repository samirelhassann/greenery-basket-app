/* eslint-disable react/prop-types */
import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

import TopIcon from "../../../../assets/topo.png";
import TextData from "../../../components/TextData";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  topIcon: {
    width: "100%",
    height: (578 / 768) * width,
    fontFamily: "Montserrat",
  },
  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});

function Top({ title }) {
  return (
    <>
      <Image source={TopIcon} style={styles.topIcon} />
      <TextData style={styles.title}>{title}</TextData>
    </>
  );
}

export default Top;
