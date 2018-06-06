import { createStackNavigator } from "react-navigation";

import TestScreen from "../Containers/TestScreen";

const TestStack = createStackNavigator({
  Test: {
    screen: TestScreen
  }
});

export default TestStack;
