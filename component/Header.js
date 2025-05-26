import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.backText}>{"<"}</Text>
    <Text style={styles.title}>First  </Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: "90%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#A4C4D9",
    flexDirection: "row",
    columnGap: 50,
    alignItems: "center",
  },
  backText: {
    fontSize: 22,
    color: "white",
  },
  title: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
});

export default Header;
