import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/tabbar-screens/AccountScreen";
import SettingsScreen from "../screens/other-screens/SettingsScreen.js";
import PhotoUploadScreen from "../screens/other-screens/PhotoUploadScreen.js"; 

const AccountStack = createNativeStackNavigator();

function AccountStackScreen() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account" component={AccountScreen} />
      <AccountStack.Screen name="Settings" component={SettingsScreen} />
      <AccountStack.Screen name="Photo Upload" component={PhotoUploadScreen} />
    </AccountStack.Navigator>
  );
}

export default AccountStackScreen;
