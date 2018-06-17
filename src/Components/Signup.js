import React, { Component } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

import { NumberInput, EmailInput, PasswordInput, Link } from "../Components";
import Validations from "../Helpers/Validations";

import { signup, confirmUser } from "../Services/AuthServices";
import textErrorServices from "../Services/TextErrorServices";
import withHOCMultiRender from "./HOCMultiRender";

const InlineError = withHOCMultiRender(Text);
export default class Signup extends Component {
  state = {
    disabled: true,
    disabledConf: true,
    view: "signup", // signup VS confirmation
    error: ""
  };

  onEmailChange = (email, isEmail) => {
    this.email = email;
    this.isEmail = isEmail;

    if (this.state.view === "signup") {
      this.toggleSendButton();
    } else {
      this.toggleConfirmationButton();
    }
  };

  onPassword1Change = (password, isPassword) => {
    this.password = password;
    this.isPassword = isPassword;
    this.toggleSendButton();
  };

  onPassword2Change = password => {
    this.password2 = password;
    this.toggleSendButton();
  };

  onNumberChange = (number, isValid) => {
    this.code = number;
    this.isCode = isValid;
    this.toggleConfirmationButton();
  };

  toggleConfirmationButton = () => {
    let disabledConf = true;
    if (this.isEmail && this.code && Validations.isNumber(this.code)) {
      disabledConf = false;
    }
    if (disabledConf !== this.state.disabledConf) {
      this.setState({ disabledConf });
    }
  };

  toggleSendButton = () => {
    const currentState = this.state.disabled;
    let nextState = true;
    if (this.email && this.isEmail) {
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

  signup = async () => {
    console.log("we will start the signup");
    // TODO prevent interacting with inputs and show activity indicator
    // TODO ADD password length validation to prevent weak passwords.
    const result = await signup(this.email, this.password);
    if (result._hasFailed) {
      const msg = textErrorServices(result.err);
      // TODO SHOW ERROR
      console.log(msg);
      return;
    }
    // TODO show the confirmation view
    this.toggleView();
  };

  confirmUser = async () => {
    const result = await confirmUser(this.email, this.code);

    if (result._hasFailed) {
      return console.log("user confirmation process has failed");
    }
    console.log("code compte a été confirmation");
  };

  toggleView = () => {
    if (this.state.view === "signup") {
      this.setState({ view: "confirmation" });
    } else {
      this.setState({ view: "signup" });
    }
  };

  render() {
    return (
      <View>
        {/* Middle Account login */}
        <View>
          {this.state.view === "signup" ? (
            <View>
              <Text>Créer un nouveau compte</Text>
            </View>
          ) : (
            <View>
              <Text>Entrez votre code de confirmation</Text>
            </View>
          )}
          <EmailInput label="Votre email" onEmailChange={this.onEmailChange} />
          {this.state.view === "signup" ? (
            <View>
              <PasswordInput onPasswordChange={this.onPassword1Change} />
              <PasswordInput
                label="Confirmer mot de passe"
                onPasswordChange={this.onPassword2Change}
              />
              <Button
                raised
                disabled={this.state.disabled}
                onPress={this.signup}
              >
                Créer un compte
              </Button>
              <Text>
                Email non vérifié?{" "}
                <Link href={this.toggleView}>Vérifier votre email</Link>
              </Text>
            </View>
          ) : (
            <View>
              <Text>Entrez votre code de confirmation</Text>
              <NumberInput onNumberChange={this.onNumberChange} />
              <Button
                raised
                disabled={this.state.disabledConf}
                onPress={this.confirmUser}
              >
                Confirmer votre email
              </Button>
              <View>
                <Text>
                  Pas encore de compte ?{" "}
                  <Link href={this.toggleView}>Créer votre compte</Link>
                </Text>
              </View>
            </View>
          )}
          {this.state.error.length > 0 && (
            <View>
              <InlineError data={this.state.error} />
            </View>
          )}
        </View>
      </View>
    );
  }
}
