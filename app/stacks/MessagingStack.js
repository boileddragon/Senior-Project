import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessagingScreen from "../screens/tabbar-screens/MessagingScreen";

const MessagingStack = createNativeStackNavigator();

export default function MessagingStackScreen() {
  return (
    <MessagingStack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <MessagingStack.Screen name="Messaging" component={MessagingScreen} />
    </MessagingStack.Navigator>
  );
}
