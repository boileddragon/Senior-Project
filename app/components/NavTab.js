import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import AccountStackScreen from "../stacks/AccountStack";
import SearchStackScreen from "../stacks/SearchStack";
import HomeScreen from "../screens/tabbar-screens/HomeScreen";
import MessageScreen from "../screens/tabbar-screens/MessagingScreen";
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
              case "Home":
                iconName = focused ? "home" : "home-outline";
                break;
              case "User":
                iconName = focused ? "person" : "person-outline";
                break;
              case "Search":
                iconName = focused ? "search" : "search-outline";
                break;
              case "Messaging":
                iconName = focused ? "chatbubbles" : "chatbubbles-outline";
                break;
              case "Events":
                iconName = focused ? "calendar" : "calendar-outline";
                break;
              default:
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
        <Tab.Screen name="Events" component={EventsStackScreen} />
        <Tab.Screen name="Messaging" component={MessageScreen} />
        <Tab.Screen name="User" component={AccountStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
