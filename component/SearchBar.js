import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <>
    <Text style={styles.appTitle}>Slide Coach</Text>
    <Text style={styles.subtitle}>My Presentations</Text>
    <TextInput
      style={styles.searchBar}
      placeholder="Search"
      placeholderTextColor="#888"
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
  </>
);

const styles = StyleSheet.create({
  appTitle: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    fontWeight: "700",
    marginTop: 10,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
  searchBar: {
    width: "85%",
    backgroundColor: "#A4C4D9",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: "white",
    alignSelf: "center",
  },
});

export default SearchBar;
