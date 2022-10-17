import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UpcomingEvent() {
  return (
    <View style={styles.container}>
      <Text>Event</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 10,
    left: 10,
  },
});
