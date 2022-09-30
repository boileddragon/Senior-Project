import * as React from "react";
import { Button, View, Text } from "react-native";

function AccountScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Personal Account</Text>
      <Button
        title="Go to settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}

export default AccountScreen;
