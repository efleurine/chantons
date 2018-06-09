import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

import { EmailInput, PasswordInput, NumberInput } from "../Components";

import Validations from "../Helpers/Validations";

export default class ResetPassword extends Component {
  state = {
    confirmation: false,
    disableReset: true,
    isEmail: false
  };

  onEmailChange = (email, isEmail) => {
    this.email = email;
    this.isEmail = isEmail;
  };

  onEmailChange = (email, isEmail) => {
    this.email = email;
    this.setState({ isEmail });
  };

  onPassword1Change = (password, isPassword) => {
    this.password = password;
    this.isPassword = isPassword;
    this.activeButton();
  };

  onPassword2Change = password => {
    this.password2 = password;
    this.activeButton();
  };

  onNumberChange = () => {};

  activeSendCode = () => {
    const currentState = this.state.disabled;
    let nextState = true;
    if (this.isEmail && this.email) {
      if (
        this.isPassword &&
        this.password &&
        Validations.areEqual(this.password, this.password2)
      ) {
        nextState = false;
      }
    }
    if (currentState !== nextState) {
      this.setState({ disabled: nextState });
    }
  };

  resetPassword = () => {};

  sendCode = () => {};
  render() {
    return (
      <View>
        <Text>{this.state.step}</Text>
        <Text>
          Enter your email and we will send a code to reset your password
        </Text>
        <EmailInput onEmailChange={this.onEmailChange} />
        <NumberInput onNumberChange={this.onNumberChange} />

        {this.state.confirmation && (
          <View>
            <Text>Please enter your confirmation code</Text>
          </View>
        )}

        {this.state.confirmation ? (
          <View>
            <PasswordInput onPasswordChange={this.onPassword1Change} />
            <PasswordInput onPasswordChange={this.onPassword2Change} />
            <Button
              raised
              disabled={this.state.disableReset}
              onPress={this.resetPassword}
            >
              Reset password
            </Button>
          </View>
        ) : (
          <View>
            <Button
              raised
              disabled={!this.state.isEmail}
              onPress={this.sendCode}
            >
              Send code
            </Button>
          </View>
        )}
      </View>
    );
  }
}
