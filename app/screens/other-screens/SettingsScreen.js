import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Upload Club Photo" onPress={() => navigation.navigate("Photo Upload")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
})