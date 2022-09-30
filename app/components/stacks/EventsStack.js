import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventsScreen from "../../screens/tabbar-screens/EventsView.js";
import CalendarScreen from "../../screens/other-screens/CalendarView.js";
import MapScreen from "../../screens/other-screens/MapView";


const EventsStack = createNativeStackNavigator();

function EventsStackScreen() {
  return (
    <EventsStack.Navigator>
      <EventsStack.Screen name="What's Happening" component={EventsScreen} />
      <EventsStack.Screen name="Calendar" component={CalendarScreen} />
      <EventsStack.Screen name="Map" component={MapScreen} />
    </EventsStack.Navigator>
  );
}

export default EventsStackScreen;
