import React from "react";
import { View, StyleSheet } from "react-native";
import { ProgressComponent } from "react-native-track-player";

export default class ProgressBar extends ProgressComponent {
  render() {
    return (
      <View style={styles.progress}>
        <View style={{ flex: this.getProgress(), backgroundColor: "red" }} />
        <View
          style={{ flex: 1 - this.getProgress(), backgroundColor: "grey" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  progress: {
    height: 1,
    width: "90%",
    marginTop: 10,
    flexDirection: "row"
  }
});
