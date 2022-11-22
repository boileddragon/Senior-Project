import React, { useState, useEffect, Fragment } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { EventRepo } from "../../core/repos/eventRepo";

export default function TodaysEvent() {
  const navigation = useNavigation();
  const [event, setEvent] = useState([]);

  /* Only display the events that are for today */
  useEffect(() => {
    EventRepo.Today().then((events) => setEvent(events));
  }, []);

  if (event.length === 0) return null;

  return (
    <View style={styles.container}>
      {/* Dynamically generate events based on how many there are in the database */}
      {event.map((e, index) => (
        <Fragment key={index}>
          <View style={[styles.card, styles.shadowProp]}>
            {/* Club name and event title */}
            <Text style={styles.eventTitle}>
              {e.clubName} - {e.title}
            </Text>

            {/* Details of the event */}
            <Text style={styles.otherInfo}>{e.details}</Text>

            {/* Location of the event */}
            <Text style={styles.otherInfo}>{e.location}</Text>

            {/* Date and time of the event. Can be clicked to navigate to the calendar. */}
            <Pressable onPress={() => navigation.navigate("Calendar")}>
              <Text style={styles.pressableLocation}>{e.date}</Text>
            </Pressable>
          </View>
        </Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "90%",
    marginVertical: 5,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  eventTitle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  clubName: {
    fontSize: 17,
  },
  otherInfo: {
    fontSize: 14,
    left: 15,
  },
  pressableLocation: {
    fontSize: 14,
    left: 15,
    color: "#00adf5",
  },
});
