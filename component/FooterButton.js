import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";

const FooterButton = () => (
  <View style={styles.fixedFooter}>
    <TouchableOpacity style={styles.continueBtn}>
      <Text style={styles.continueText}>Continue</Text>
    </TouchableOpacity>
    <Text style={styles.footer}>Powered by CAMPUS READY</Text>
  </View>
);

const styles = StyleSheet.create({
  fixedFooter: {
    backgroundColor: "#f5f8fc",
    paddingBottom: Platform.OS === "ios" ? 20 : 10,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  continueBtn: {
    backgroundColor: "#f39c12",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    width: "85%",
  },
  continueText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 10,
  },
});

export default FooterButton;
