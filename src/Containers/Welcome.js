import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

class WelcomeScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  componentDidMount() {
    console.log("First time screen is mounted");
    setTimeout(() => this.props.navigation.navigate("Registration"), 2000);
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
