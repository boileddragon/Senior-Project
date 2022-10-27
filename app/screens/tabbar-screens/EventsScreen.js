import * as React from "react";
import { Pressable, ScrollView, View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import TodaysEvent from "../../components/TodaysEvent";
import UpcomingEvent from "../../components/UpcomingEvent";

export default function EventsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Need to make sticky or something somehow - fix the buttons */}
      <ScrollView style={styles.scrollContainer}>
        {/* Events happening today from clubs the user follows */}
        <Text style={styles.header}>Today - (Today's Date)</Text>
        <TodaysEvent />

        {/* Line separator between current and future event sections */}
        <View style={styles.eventSeparatorContainer}>
          <View style={styles.eventSeparator} />
        </View>

        {/* Events happening within the next 7 days from clubs the user follows */}
        <Text style={styles.header}>Upcoming</Text>
        <UpcomingEvent />
      </ScrollView>

      <View>
        {/* Navigator button to the calendar */}
        <Pressable
          style={styles.calButton}
          onPress={() => navigation.navigate("Calendar")}
        >
          <Text style={styles.buttonText}>
            Calendar <Ionicons name={"calendar-outline"} />
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    marginBottom: 60,
  },
  header: {
    marginTop: 10,
    left: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  eventSeparatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  eventSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
  calButton: {
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
