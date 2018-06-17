import React, { PureComponent } from "react";
import { Text } from "react-native-paper";
import PropTypes from "prop-types";

export default class Link extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    href: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    color: "#0000ff"
  };

  render() {
    return (
      <Text
        style={{
          color: this.props.color
        }}
        onPress={this.props.href}
      >
        {this.props.children}
      </Text>
    );
  }
}
