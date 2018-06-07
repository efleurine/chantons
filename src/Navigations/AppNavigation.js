import { createStackNavigator, createSwitchNavigator } from "react-navigation";

import WelcomeScreen from "../Containers/Welcome";
import PresentationScreen from "../Containers/PresentationScreen";
import RegistrationScreen from "../Containers/RegistrationScreen";
import MainScreen from "../Containers/MainScreen";

const WelcomeStack = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen
    },
    Presentation: {
      screen: PresentationScreen
    },
    Registration: {
      screen: RegistrationScreen
    }
  },
  {
    initialRouteName: "Welcome",
    headerMode: "none"
  }
);

const MainStack = createStackNavigator({
  Main: {
    screen: MainScreen
  }
});

const SwitchNavigator = createSwitchNavigator(
  {
    WelcomeStack,
    MainStack
  },
  {
    initialRouteName: "WelcomeStack",
    headerMode: "none"
  }
);

/**
 * I will need a
 */
export default SwitchNavigator;
