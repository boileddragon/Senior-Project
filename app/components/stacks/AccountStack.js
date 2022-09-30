import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../../screens/tabbar-screens/AccountView";
import SettingsScreen from "../../screens/other-screens/SettingsView.js";

const AccountStack = createNativeStackNavigator();

function AccountStackScreen() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account" component={AccountScreen} />
      <AccountStack.Screen name="Settings" component={SettingsScreen} />
    </AccountStack.Navigator>
  );
}

export default AccountStackScreen;
