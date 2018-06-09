/**
 * Credits
 * https://github.com/vishaljadav24/react-native-hide-show-password-input/blob/master/src/component/passwordInput.js
 */
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { TextField } from "react-native-material-textfield";

import Validations from "../Helpers/Validations";

const visibility = {
  off: "visibility-off",
  on: "visibility"
};

export default class PasswordInput extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    onPasswordChange: PropTypes.func.isRequired,
    iconColor: PropTypes.string,
    iconSize: PropTypes.number,
    validator: PropTypes.func,
    validColor: PropTypes.string,
    invalidColor: PropTypes.string
  };

  static defaultProps = {
    iconSize: 20,
    iconColor: "blue",
    validator: Validations.isPasswordValid,
    validColor: "#00f",
    invalidColor: "#f00",
    label: "password"
  };
  state = {
    icEye: "off",
    secureTextEntry: true,
    isValid: false,
    password: ""
  };

  onChangeText = password => {
    const isValid = this.props.validator(password);
    this.setState({ password, isValid });
    this.props.onPasswordChange(password, isValid);
  };

  toggleEye = () => {
    const icEye = this.state.icEye === "off" ? "on" : "off";
    const secureTextEntry = icEye === "off";
    this.setState({ icEye, secureTextEntry });
  };

  render() {
    return (
      <View>
        <TextField
          label={this.props.label}
          value={this.state.password}
          secureTextEntry={this.state.secureTextEntry}
          onChangeText={text => this.onChangeText(text)}
          underlineColor={
            this.state.isValid ? this.props.validColor : this.props.invalidColor
          }
        />
        <Icon
          style={styles.icon}
          name={visibility[this.state.icEye]}
          size={this.props.iconSize}
          color={this.props.iconColor}
          onPress={this.toggleEye}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 33,
    right: 0
  }
});
