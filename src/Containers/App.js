import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Amplify from "aws-amplify";
import SplashScreen from "react-native-smart-splash-screen";

import awsConfig from "../../aws-exports";

Amplify.configure(awsConfig);

export default class App extends React.Component {
  componentDidMount() {
    console.log("bootstrap component mounted");
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Chatons notre espérance</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
