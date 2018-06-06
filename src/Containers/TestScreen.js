import React from "react";
import { View, Text, StyleSheet } from "react-native";

class TestScreen extends React.Component {
  static navigationOptions = {
    title: "Test Space"
  };

  componentDidMount() {
    console.log("test screen has been mounted");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Integrating the player</Text>
      </View>
    );
  }
}

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: 30
  }
});
