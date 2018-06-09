import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "react-native-paper";

import Validations from "../Helpers/Validations";

export default class EmailInput extends React.Component {
  static propTypes = {
    onEmailChange: PropTypes.func.isRequired,
    validColor: PropTypes.string,
    invalidColor: PropTypes.string
  };

  static defaultProps = {
    validColor: "#00f",
    invalidColor: "#f00"
  };

  state = {
    email: "",
    isValid: false
  };

  onChangeText = email => {
    const isValid = Validations.required(email) && Validations.isEmail(email);
    this.setState({ email, isValid });
    this.props.onEmailChange(email, isValid);
  };

  render() {
    return (
      <TextInput
        underlineColor={
          this.state.isValid ? this.props.validColor : this.props.invalidColor
        }
        keyboardType="email-address"
        label="Email"
        value={this.state.email}
        onChangeText={text => this.onChangeText(text)}
      />
    );
  }
}
