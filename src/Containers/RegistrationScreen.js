import React, { Component } from "react";
import { View, Text } from "react-native";

export default class RegistrationScreen extends Component {
  static navigationOptions = {
    title: "Registration"
  };
  componentDidMount() {
    console.log("Registration screen was mounted");
  }

  render() {
    return (
      <View>
        <Text>The registration screen</Text>
      </View>
    );
  }
}
