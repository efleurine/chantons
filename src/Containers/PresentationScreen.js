import React, { Component } from "react";
import { View, Text } from "react-native";

export default class PresentationScreen extends Component {
  static navigationOptions = {
    title: "Presentation"
  };
  componentDidMount() {
    console.log("Presentation Screen was mounted");
  }

  render() {
    return (
      <View>
        <Text>The Presentation screen</Text>
      </View>
    );
  }
}
