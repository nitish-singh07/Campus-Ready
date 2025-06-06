import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SlideCoachScreen from "./screens/SlideCoachScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <SlideCoachScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
