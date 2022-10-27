import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import AccountStackScreen from "../stacks/AccountStack";
import SearchStackScreen from "../stacks/SearchStack";
import HomeStackScreen from "../stacks/HomeStack";
import MessagingStackScreen from "../stacks/MessagingStack";
import EventsStackScreen from "../stacks/EventsStack";

const AppTheme = {
  dark: false,
  colors: {
    primary: "white",
    background: "white",
    card: "rgb(25, 45, 83)",
    text: "white",
    border: "rgb(25, 45, 83)",
    notification: "white",
  },
};

const Tab = createBottomTabNavigator();

export default function NavTab() {
  return (
    <NavigationContainer theme={AppTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case "HomeStack":
                iconName = focused ? "home" : "home-outline";
                break;
              case "UserStack":
                iconName = focused ? "person" : "person-outline";
                break;
              case "SearchStack":
                iconName = focused ? "search" : "search-outline";
                break;
              case "MessagingStack":
                iconName = focused ? "chatbubbles" : "chatbubbles-outline";
                break;
              case "EventsStack":
                iconName = focused ? "calendar" : "calendar-outline";
                break;
              default:
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
          headerShown: false,
        })}
        initialRouteName="HomeStack"
      >
        <Tab.Screen name="EventsStack" component={EventsStackScreen} />
        <Tab.Screen name="SearchStack" component={SearchStackScreen} />
        <Tab.Screen name="HomeStack" component={HomeStackScreen} />
        <Tab.Screen name="MessagingStack" component={MessagingStackScreen} />
        <Tab.Screen name="UserStack" component={AccountStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
