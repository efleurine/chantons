import React from "react";
import { Text } from "react-native-paper";
import PropTypes from "prop-types";

export default class InlineError extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  };
  render() {
    return <Text {...this.props} />;
  }
}
