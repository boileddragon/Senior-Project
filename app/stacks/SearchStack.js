import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/tabbar-screens/SearchScreen";

const SearchStack = createNativeStackNavigator();

export default function SearchStackScreen() {
  return (
    <SearchStack.Navigator
    screenOptions={{
      headerShown: true,
    }}
    >
      <SearchStack.Screen name="Search For Clubs" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}