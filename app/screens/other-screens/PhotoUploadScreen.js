import * as React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

export default function PhotoUploadScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/profile-club-icon.png")}
        style={styles.defaultImg}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  defaultImg: {},
});
