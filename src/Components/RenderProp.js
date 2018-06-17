// https://levelup.gitconnected.com/understanding-react-higher-order-components-by-example-95e8c47c8006
// https://levelup.gitconnected.com/understanding-react-render-props-by-example-71f2162fd0f2

import React from "react";
import PropTypes from "prop-types";

export default class RenderProp extends React.PureComponent {
  static propTypes = {
    render: PropTypes.func.isRequired
  };
  render() {
    return <React.Fragment>{this.props.render()}</React.Fragment>;
  }
}
