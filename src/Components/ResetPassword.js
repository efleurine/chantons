import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

import { EmailInput, PasswordInput, NumberInput, Link } from "../Components";
import { sendResetCode, resetPasswordWithCode } from "../Services/AuthServices";
import errorToTextServices from "../Services/TextErrorServices";

import Validations from "../Helpers/Validations";

export default class ResetPassword extends Component {
  state = {
    flow: "confirmation", // request & confirmation
    disableReset: true,
    isEmail: false
  };

  onEmailChange = (email, isEmail) => {
    this.email = email;
    this.setState({ isEmail }, () => this.activeButton());
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

  onNumberChange = code => {
    this.code = code;
    this.activeButton();
  };

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

  activeButton = () => {
    const currentState = this.state.disableReset;
    let nextState = true;
    if (this.state.isEmail) {
      if (
        this.code &&
        Validations.isNumber(this.code) &&
        this.isPassword &&
        this.password &&
        Validations.areEqual(this.password, this.password2)
      ) {
        nextState = false;
      }
    }
    if (currentState !== nextState) {
      this.setState({ disableReset: nextState });
    }
  };

  toggleButtons = () => {
    switch (this.state.flow) {
      case "request":
        break;
      case "confirmation":
        break;
      default:
        break;
    }
  };

  toggleView = () => {
    console.log("toogle    ", new Date());
    switch (this.state.flow) {
      case "request":
        this.setState({ flow: "confirmation" });
        break;
      case "confirmation":
        this.setState({ flow: "request" });
        break;
      default:
        break;
    }
  };

  resetPassword = async () => {
    if (
      !this.code ||
      !Validations.isNumber(this.code) ||
      !this.password ||
      this.password !== this.password2
    ) {
      return;
    }
    const resp = await resetPasswordWithCode(
      this.email,
      this.code,
      this.password
    );

    if (resp && resp._hasFailed) {
      console.log("we could not change the password"); // TODO Show error message
      return;
    }
    console.log("password change was successful");
  };

  sendCode = async () => {
    const resp = await sendResetCode(this.email);
    if (resp._hasFailed) {
      const errorText = errorToTextServices(resp.error);
      console.log(errorText);
      return;
    }
    // ready to change the password with confirmation code
    this.setState({ flow: "confirmation" });
  };
  render() {
    return (
      <View behavior="padding" enabled>
        <Text>{this.state.step}</Text>
        <Text>
          Enter your email and we will send a code to reset your password
        </Text>
        <EmailInput onEmailChange={this.onEmailChange} />
        {this.state.flow === "request" && (
          <View>
            <Button
              raised
              disabled={!this.state.isEmail}
              onPress={this.sendCode}
            >
              Send code
            </Button>
            <Text>Déjà un code?</Text>
            <Link href={this.toggleView}>Réinitialiser votre mot de passe</Link>
          </View>
        )}
        {this.state.flow === "confirmation" && (
          <View>
            <NumberInput onNumberChange={this.onNumberChange} />
            <PasswordInput onPasswordChange={this.onPassword1Change} />
            <PasswordInput onPasswordChange={this.onPassword2Change} />
            <Button
              raised
              disabled={this.state.disableReset}
              onPress={this.resetPassword}
            >
              Reset password
            </Button>
            <Text>Besoin d'un code de confirmation?</Text>
            <Link href={this.toggleView}>Envoyer un code</Link>
          </View>
        )}
      </View>
    );
  }
}
