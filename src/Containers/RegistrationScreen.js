import React, { Component } from "react";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";

// This screen will make the interface with AWS service for the registration
// Will will use the data provided and pass function to the underling implementation
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";
import ResetPassword from "../Components/ResetPassword";

export default class RegistrationScreen extends Component {
  static navigationOptions = {
    title: "Registration"
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  state = {
    // can be either signup or // signin
  };
  componentDidMount() {}

  render() {
    return (
      <ScrollView>
        <Signup />
        <Signin />
        <ResetPassword />
      </ScrollView>
    );
  }
}
