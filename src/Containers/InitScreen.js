import React, { Component } from "react";
import { View, Text as NativeText } from "react-native";

import { Header, Container, Content, Text, Title, Button } from "native-base";

import AsyncStorageAPI from "../Services/AsyncStorageAPI";
import store from "react-native-simple-store";

export default class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
    this._nextScren = "";
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    console.tron.log("We will move");
    let firstTime;
    try {
      firstTime = await store.get("completedConfig");
    } catch (error) {}

    if (firstTime) {
      // navigate to register page
      this.props.navigation.navigate("AuthStack"); // should be from the swiper
      return;
    }

    // this is the very first launch
    this.props.navigation.navigate("LaunchSwiperStack");
  };

  render() {
    return (
      <Container>
        <Content>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>Loading App ...</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
