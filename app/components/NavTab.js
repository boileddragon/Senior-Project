import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeScreen from "../screens/HomeView.js";
import LoginScreen from "../screens/LoginView.js";
import AccountScreen from "../screens/AccountView";
import CalendarScreen from "../screens/CalendarView";
import ClubInfoScreen from "../screens/ClubInfoView";
import LocationsScreen from "../screens/MapView";
import MessageScreen from "../screens/MessagingView";
import SearchScreen from "../screens/SearchView";
import SettingsScreen from "../screens/SettingsView";

const Tab = createBottomTabNavigator();

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

function NavTab() {
  return (
    <NavigationContainer theme={AppTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="ClubInfo" component={ClubInfoScreen} />
        <Tab.Screen name="Locations" component={LocationsScreen} />
        <Tab.Screen name="Messaging" component={MessageScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavTab;
