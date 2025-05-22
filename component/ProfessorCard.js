import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfessorCard = ({ name, type, personality, behavior, color }) => {
  return (
    <View style={styles.cardWrapper}>
      {/* Icon overlapping the card */}
      <View style={[styles.iconCircle, { borderColor: color }]}>
        <Text style={[styles.iconBars, { color }]}>‖‖‖</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <Text style={styles.profName}>{name}</Text>
            <Text style={styles.profType}>Type: {type}</Text>
          </View>
          <Text style={styles.sectionTitle}>Personality</Text>
          <Text style={styles.sectionText}>{personality}</Text>
          <Text style={styles.sectionTitle}>Presentation Behavior</Text>
          <Text style={styles.sectionText}>{behavior}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: 30,
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    width: "100%",
    paddingTop: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  iconCircle: {
    position: "absolute",
    top: -30,
    zIndex: 10,
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    left: 20,
  },
  iconBars: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardContent: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#2c3e50",
  },
  profType: {
    fontSize: 14,
    color: "#6c5ce7",
    fontWeight: "600",
  },
  sectionTitle: {
    fontWeight: "bold",
    marginTop: 8,
    color: "#6c5ce7",
  },
  sectionText: {
    fontSize: 14,
    color: "#444",
  },
});

export default ProfessorCard;
