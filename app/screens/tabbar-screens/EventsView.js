import * as React from "react";
import { Button, View, Text } from "react-native";

function EventsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Events</Text>
      <Button
        title="Go to calendar"
        onPress={() => navigation.navigate("Calendar")}
      />
      <Button
        title="Go to map"
        onPress={() => navigation.navigate("Map")}
      />
    </View>
  );
}

export default EventsScreen;
