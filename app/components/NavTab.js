import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import AccountStackScreen from "./stacks/AccountStack.js";
import SearchStackScreen from "./stacks/SearchStack.js";
import HomeScreen from "../screens/tabbar-screens/HomeView.js";
import MessageScreen from "../screens/tabbar-screens/MessagingView";
import EventsStackScreen from "./stacks/EventsStack";

const AppTheme = {
  dark: false,
  colors: {
    primary: "rgb(242, 242, 242)",
    background: "rgb(242, 242, 242)",
    card: "rgb(25, 45, 83)",
    text: "rgb(242, 242, 242)",
    border: "rgb(25, 45, 83)",
    notification: "rgb(242, 242, 242)",
  },
};

const Tab = createBottomTabNavigator();

function NavTab() {
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

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="User" component={AccountStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Messaging" component={MessageScreen} />
        <Tab.Screen name="Events" component={EventsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavTab;
