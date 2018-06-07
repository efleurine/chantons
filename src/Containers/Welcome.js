import React, { Component } from "react";
import { View, Text } from "react-native";

class WelcomeScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
  };

  componentDidMount() {
    console.log("First time screen is mounted");
  }

  render() {
    return (
      <View>
        <Text>Chantons est une application etc.</Text>
        <Text>You see this message because you are a fist time user</Text>
      </View>
    );
  }
}

export default WelcomeScreen;
