import React from "react";
import PropTypes from "prop-types";
import { generateId } from "../Services/HelperServices";

const withHOCMultiRender = WrappedComponent => {
  class HOC extends React.PureComponent {
    static propTypes = {
      data: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
      ]).isRequired,
      style: PropTypes.object
    };
    static defaultProps = {
      style: {}
    };
    render() {
      const _data = Array.isArray(this.props.data)
        ? this.props.data
        : [this.props.data];
      return (
        <React.Fragment>
          {_data.map(el => (
            <WrappedComponent style={this.props.style} key={generateId()}>
              {el}
            </WrappedComponent>
          ))}
        </React.Fragment>
      );
    }
  }
  return HOC;
};

export default withHOCMultiRender;
