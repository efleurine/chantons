import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import PropTypes from "prop-types";

import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { signin } from "../Services/AuthServices";

export default class Signin extends Component {
  static propTypes = {
    goTo: PropTypes.string
  };

  static defaultProps = {
    goTo: "Main"
  };
  state = {
    disabled: true
  };

  onEmailChange = (email, isEmail) => {
    this.email = email;
    this.isEmail = isEmail;
    this.activeButton();
  };

  onPasswordChange = (password, isPassword) => {
    this.password = password;
    this.isPassword = isPassword;
    this.activeButton();
  };

  activeButton = () => {
    const currentState = this.state.disabled;
    let nextState = true;
    if (this.isEmail && this.email) {
      if (this.isPassword && this.password) {
        nextState = false;
      }
    }
    if (currentState !== nextState) {
      this.setState({ disabled: nextState });
    }
  };

  login = async () => {
    // success go to homepage -- error clean and show error message
    const resp = await signin(this.email, this.password);

    if (resp && resp._hasFailed) {
      console.log("login failed");
      console.log(resp);
      return;
    }
    console.log("login was a success");
    console.log(resp);
  };

  render() {
    return (
      <View>
        {/* Middle Account login */}
        <View>
          <EmailInput onEmailChange={this.onEmailChange} />
          <PasswordInput onPasswordChange={this.onPasswordChange} />
          <Button raised disabled={this.state.disabled} onPress={this.login}>
            Se connecter
          </Button>
        </View>
      </View>
    );
  }
}
