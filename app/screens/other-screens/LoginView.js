import * as React from "react";
import { Button, View, Text } from "react-native";
import NavTab from "../../components/NavTab";

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default LoginScreen;
