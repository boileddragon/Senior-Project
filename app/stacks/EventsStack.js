import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventsScreen from "../screens/tabbar-screens/EventsScreen.js";
import CalendarScreen from "../screens/other-screens/CalendarScreen.js";


const EventsStack = createNativeStackNavigator();

function EventsStackScreen() {
  return (
    <EventsStack.Navigator>
      <EventsStack.Screen name="What's Happening" component={EventsScreen} />
      <EventsStack.Screen name="Calendar" component={CalendarScreen} />
    </EventsStack.Navigator>
  );
}

export default EventsStackScreen;
