import React, { Component } from "react";
import { View, Text } from "react-native";

class MainScreen extends Component {
  static navigationOptions = {
    title: "Main"
  };

  componentDidMount() {
    console.log("Main screen is mounted");
  }

  render() {
    return (
      <View>
        <Text>The main screen</Text>
      </View>
    );
  }
}

export default MainScreen;
