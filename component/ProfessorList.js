import React from "react";
import { FlatList, View } from "react-native";
import ProfessorCard from "./ProfessorCard";

const ProfessorList = ({ professors }) => (
  <FlatList
    data={professors}
    keyExtractor={(item) => item.id}
    contentContainerStyle={{
      paddingTop: 30,
      paddingBottom: 160,
      paddingHorizontal: 20,
    }}
    renderItem={({ item }) => (
      <ProfessorCard
        name={item.name}
        type={item.type}
        personality={item.personality}
        behavior={item.behavior}
        color={item.color}
      />
    )}
    ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
    keyboardShouldPersistTaps="handled"
  />
);

export default ProfessorList;
