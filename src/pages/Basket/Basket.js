/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import {
  FlatList, ScrollView, StyleSheet, View,
} from "react-native";

import TextData from "../../components/TextData";
import Details from "./components/Details";
import Item from "./components/Item";
import Top from "./components/Top";

const styles = StyleSheet.create({
  basketContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
    textAlign: "center",
  },
});

function Basket({ top, details, items }) {
  return (
    <ScrollView>
      <FlatList
        data={items.list}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => (
          <>
            <Top {...top} />
            <View style={styles.basketContainer}>
              <Details {...details} />
              <TextData style={styles.title}>{items.title}</TextData>
            </View>
          </>
        )}
      />
    </ScrollView>
  );
}

export default Basket;
