import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

/* Base layout */
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back, User!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    paddingTop: 10,
  },
});
