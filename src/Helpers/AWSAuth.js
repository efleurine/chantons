import Amplify, { Auth, Cache } from "aws-amplify";

import AWSConfig from "../../aws-exports";
import { errorLogger } from "../Services/LogServices";

Amplify.configure(AWSConfig);

export function signup(email, password) {
  return Auth.signUp({
    username: email,
    password
  }).catch(err => {
    errorLogger("Could not signup user", err);
    return false;
  });
}

export function confirmUser(email, authCode) {
  // 4
  console.log("we will confirm user");
  return Auth.confirmSignUp(email, authCode).catch(err => {
    errorLogger("Could not Confirm Signup", err);
    return false;
  });
}

export function signin(email, password) {
  return Auth.signIn(email, password).catch(err => {
    errorLogger("Could not signin user", err);
    return false;
  });
}

export function signout() {
  Auth.signOut().catch(err => {
    errorLogger("Could not signout the user ", err);
    return false;
  });
}

export function changePassword(oldPassword, newPassword) {
  return Auth.currentAuthenticatedUser()
    .then(user => Auth.changePassword(user, oldPassword, newPassword))
    .catch(err => {
      errorLogger("Could not change password", err);
      return false;
    });
}

export function startResetPassword(email) {
  return Auth.forgotPassword(email).catch(err => {
    errorLogger("Could not start the password reset procedure", err);
    return false;
  });
}

export function completeResetPassword(email, code, newPassword) {
  return Auth.forgotPasswordSubmit(email, code.toString(), newPassword).catch(
    err => {
      errorLogger("Could not complete the password reset procedure", err);
      return false;
    }
  );
}

export function getCurrentSession() {
  // CognitoUserSession => { idToken, refreshToken, accessToken }
  return Auth.currentSession();
}

export function getFederatedInfo() {
  // Run this after the sign-in
  return Cache.getItem("federatedInfo");
}
export function deleteUser() {}
