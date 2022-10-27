import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/tabbar-screens/SearchScreen";
import ClubInfoScreen from "../screens/other-screens/ClubInfoScreen";

const SearchStack = createNativeStackNavigator();

export default function SearchStackScreen() {
  return (
    <SearchStack.Navigator
    screenOptions={{
      headerShown: true,
    }}
    >
      <SearchStack.Screen name="Search For Clubs" component={SearchScreen} />
      <SearchStack.Screen name="Club Info" component={ClubInfoScreen} />
    </SearchStack.Navigator>
  );
}