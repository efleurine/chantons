import React from "react";
import Amplify from "aws-amplify";
import SplashScreen from "react-native-smart-splash-screen";
import { Provider as PaperProvider } from "react-native-paper";

import awsConfig from "../../aws-exports";
import RootContainer from "../Containers/RootContainer";
import { initPlayer } from "../Services/PlayerServices";

Amplify.configure(awsConfig);

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500
    });
    try {
      initPlayer();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <PaperProvider>
        <RootContainer />
      </PaperProvider>
    );
  }
}
