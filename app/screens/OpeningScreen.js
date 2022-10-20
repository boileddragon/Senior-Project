import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./other-screens/LoginScreen.js";
import { NavigationContainer } from "@react-navigation/native";

const LoginStack = createNativeStackNavigator();

function LoginStackScreen() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator>
        <LoginStack.Screen name="Login" component={LoginScreen} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}

export default LoginStackScreen;
