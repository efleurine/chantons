import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppNavigation from "../Navigations/AppNavigation";
// import TestScreen from "../Containers/TestScreen";

export default class RootContainer extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <AppNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
