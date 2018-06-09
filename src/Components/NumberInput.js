import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "react-native-paper";

import Validations from "../Helpers/Validations"; // isNumber

export default class NumberInput extends React.Component {
  static propTypes = {
    onNumberChange: PropTypes.func.isRequired,
    validColor: PropTypes.string,
    invalidColor: PropTypes.string,
    label: PropTypes.string
  };

  static defaultProps = {
    validColor: "#00f",
    invalidColor: "#f00",
    label: "code"
  };

  state = {
    number: "",
    isValid: false
  };

  onChangeText = number => {
    const next = Validations.isNumber(number.slice(-1))
      ? number
      : number.slice(0, number.length - 1);

    const isValid = Validations.required(next);
    this.setState({ number: next, isValid });
    this.props.onNumberChange(next, isValid);
  };

  render() {
    return (
      <TextInput
        underlineColor={
          this.state.isValid ? this.props.validColor : this.props.invalidColor
        }
        keyboardType="numeric"
        label={this.props.label}
        value={this.state.number}
        onChangeText={text => this.onChangeText(text)}
      />
    );
  }
}
