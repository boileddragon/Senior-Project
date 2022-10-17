import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TodaysEvent() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventTitle}>Event Title</Text>
      <Text style={styles.clubName}>Club Name</Text>
      <Text style={styles.details}>Details</Text>
      <Text style={styles.timeDate}>Time, Date</Text>
      <Text style={styles.location}>Place that links to map</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 10,
    left: 10,
  },
  eventTitle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  clubName: {
    fontSize: 17,
  },
  details: {
    left: 15,
  },
  timeDate: {
    left: 15,
  },
  location: {
    left: 15,
    marginBottom: 10,
  },
});
