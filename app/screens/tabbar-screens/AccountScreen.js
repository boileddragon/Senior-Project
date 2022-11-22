import * as React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

/* Base layout */
export default function AccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Personal Account</Text>

      {/* 
      Navigator button to the settings page.
      It is a pressable in order to style it to fit with the rest of the app. 
      */}
      <Pressable
        style={styles.settingsButton}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={styles.buttonText}>
          Settings <Ionicons name={"settings-outline"} />
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  settingsButton: {
    paddingVertical: 7,
    paddingHorizontal: 11,
    borderRadius: 4,
    backgroundColor: "rgb(25, 45, 83)",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
