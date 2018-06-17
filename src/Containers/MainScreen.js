import React, { Component } from "react";
import { View, Text } from "react-native";

class MainScreen extends Component {
  static navigationOptions = {
    title: "Main"
  };

  componentDidMount() {}

  render() {
    return (
      <View>
        <Text>The main screen</Text>
      </View>
    );
  }
}

export default MainScreen;
