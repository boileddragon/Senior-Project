import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../../screens/tabbar-screens/SearchView";
import ClubInfoScreen from "../../screens/other-screens/ClubInfoView";

const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search For Clubs" component={SearchScreen} />
      <SearchStack.Screen name="Club Info" component={ClubInfoScreen} />
    </SearchStack.Navigator>
  );
}

export default SearchStackScreen;
