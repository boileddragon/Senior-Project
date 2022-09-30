import * as React from "react";
import { Button, View, Text } from "react-native";

function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Search for some clubs!</Text>
      <Button
        title="Go to club info"
        onPress={() => navigation.navigate("Club Info")}
      />
    </View>
  );
}

export default SearchScreen;
