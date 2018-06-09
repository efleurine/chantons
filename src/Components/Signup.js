import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import Validations from "../Helpers/Validations";

export default class Signup extends Component {
  state = {
    disabled: true
  };

  onEmailChange = (email, isEmail) => {
    this.email = email;
    this.isEmail = isEmail;
    this.activeButton();
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

  activeButton = () => {
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

  signup = () => {};

  render() {
    return (
      <View>
        {/* Middle Account login */}
        <View>
          <EmailInput onEmailChange={this.onEmailChange} />
          <PasswordInput onPasswordChange={this.onPassword1Change} />
          <PasswordInput onPasswordChange={this.onPassword2Change} />
          <Button raised disabled={this.state.disabled} onPress={this.signup}>
            Créer un compte
          </Button>
        </View>
      </View>
    );
  }
}
