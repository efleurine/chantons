import React, { Component } from "react";
import { View, Text } from "react-native";

class ProfileScene extends Component {
  static navigationOptions = {
    title: "Profile"
  };

  componentDidMount() {
    console.log("Profile screen is mounted");
  }

  render() {
    return (
      <View>
        <Text>The profile screen</Text>
      </View>
    );
  }
}

export default ProfileScene;
