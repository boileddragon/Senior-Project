import React, { useState, useEffect, Fragment } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { fill } from "../../core/testEvents";

import { Event } from "../../core/models/event";
import { EventRepo } from "../../core/repos/eventRepo";

export default function TodaysEvent() {
  const navigation = useNavigation();
  const [event, setEvent] = useState([]);

  useEffect(() => {
    //EventRepo.add(new Event("Meeting", "CT Club", "We will be discussing Meehl's Website", "Dunk Tank", new Date(2022,11,1,17,30))).then(console.log("event added")).catch();
    EventRepo.Today().then((events) => setEvent(events));
  }, []);

  if (event.length === 0) return null;

  return (
    <View style={styles.container}>
      {event.map((e, index) => (
        <Fragment key={index}>
          <View style={[styles.card, styles.shadowProp]}>
            <Text style={styles.eventTitle}>{e.clubName} - {e.title}</Text>
            <Text style={styles.otherInfo}>{e.details}</Text>
            <Text style={styles.otherInfo}>{e.location}</Text>
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
