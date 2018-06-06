import React from "react";
import Amplify from "aws-amplify";
import SplashScreen from "react-native-smart-splash-screen";

import awsConfig from "../../aws-exports";
import RootContainer from "../Containers/RootContainer";
import { initPlayer } from "../Services/PlayerServices";

Amplify.configure(awsConfig);

export default class App extends React.Component {
  componentDidMount() {
    console.log("App component was mounted");
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500
    });
    console.log("before");
    try {
      initPlayer();
    } catch (error) {
      console.log(error);
    }

    console.log("after");
  }

  render() {
    return <RootContainer />;
  }
}
