import * as React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

export default function ClubInfoScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../../assets/test-pic.jpg")}
      />
      <Text>Club Info</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
  img: {
    width: "90%",
    height: "30%",
  },
});