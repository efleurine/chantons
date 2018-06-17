import React, { Component } from "react";
import { View, Text } from "react-native";

export default class PresentationScreen extends Component {
  static navigationOptions = {
    title: "Presentation"
  };
  componentDidMount() {}

  render() {
    return (
      <View>
        <Text>The Presentation screen</Text>
      </View>
    );
  }
}
