import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../component/Header";
import SearchBar from "../component/SearchBar";
import ProfessorList from "../component/ProfessorList";
import FooterButton from "../component/FooterButton";

const { height } = Dimensions.get("window");

const SlideCoachScreen = () => {
  const professors = [
    {
      id: "1",
      name: "Professor 1",
      type: "fun  & clam",
      personality: "Patient, empathetic, motivational",
      behavior:
        "Gives constructive feedback, maintains a calm tone, encourages progress",
      color: "#2ecc71",
    },
    {
      id: "2",
      name: "Professor 2",
      type: "Energetic & Fun",
      personality: "Lively, animated, humorous",
      behavior:
        "Uses hand gestures, enthusiastic tone, cracks jokes to build comfort",
      color: "#f39c12",
    },
    {
      id: "3",
      name: "Professor 3",
      type: "Strict but Fair",
      personality: "Serious, focused, principled",
      behavior:
        "Gives clear expectations, asks direct questions, maintains professionalism",
      color: "#FFFF00",
    },
    {
      id: "4",
      name: "Professor 4",
      type: "Calm & Analytical",
      personality: "Thoughtful, composed, detail-oriented",
      behavior:
        "Speaks slowly, analyzes slides deeply, provides structured feedback",
      color: "#3498db",
    },
    {
      id: "5",
      name: "Professor 5",
      type: "Creative & Expressive",
      personality: "Imaginative, open-minded, expressive",
      behavior:
        "Suggests unique presentation ideas, encourages storytelling, reacts emotionally",
      color: "#9b59b6",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProfessors, setFilteredProfessors] = useState(professors);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = professors.filter(
      (prof) =>
        prof.name.toLowerCase().includes(query) ||
        prof.type.toLowerCase().includes(query) ||
        prof.personality.toLowerCase().includes(query) ||
        prof.behavior.toLowerCase().includes(query)
    );
    setFilteredProfessors(filtered);
  }, [searchQuery]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <View style={styles.container}>
        <StatusBar backgroundColor="#4B7FD3" barStyle="light-content" />

        <LinearGradient
          colors={["#4B7FD3", "#88B6C6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientSection}
        >
          <Header />
          <View
            style={{
              rowGap: 20,
              paddingVertical: 10,
              width: "95%",
            }}
          >
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </View>
        </LinearGradient>

        <View style={styles.whiteSection}>
          <ProfessorList professors={filteredProfessors} />
        </View>

        <FooterButton />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradientSection: {
    height: height * 0.35,
    paddingTop: 24,

    alignItems: "center",
    zIndex: 0,
  },
  whiteSection: {
    flex: 1,
    backgroundColor: "#f5f8fc",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    zIndex: 1,
  },
});

export default SlideCoachScreen;
