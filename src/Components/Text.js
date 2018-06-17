import React from "react";
import { Text as BaseText } from "react-native-paper";

export default class Text extends React.PureComponent {
  render() {
    return <BaseText {...this.props} />;
  }
}
