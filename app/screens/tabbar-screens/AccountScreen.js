import * as React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function AccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Personal Account</Text>
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
