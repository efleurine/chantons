import React from "react";
import Amplify from "aws-amplify";
import SplashScreen from "react-native-smart-splash-screen";

import awsConfig from "../../aws-exports";
import RootContainer from "../Containers/RootContainer";

Amplify.configure(awsConfig);

export default class App extends React.Component {
  componentDidMount() {
    console.log("App component was mounted");
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500
    });
  }

  render() {
    return <RootContainer />;
  }
}
