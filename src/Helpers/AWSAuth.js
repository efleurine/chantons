import Amplify, { Auth, Cache } from "aws-amplify";

import AWSConfig from "../../aws-exports";
import { hasFailed } from "../Services/LogServices";

Amplify.configure(AWSConfig);

export function signup(email, password) {
  return Auth.signUp({
    username: email,
    password
  }).catch(err => hasFailed(err));
}

export function confirmUser(email, authCode) {
  // 4
  return Auth.confirmSignUp(email, authCode).catch(err => hasFailed(err));
}

export function signin(email, password) {
  return Auth.signIn(email, password).catch(err => hasFailed(err));
}

export function signout() {
  Auth.signOut().catch(err => hasFailed(err));
}

export function changePassword(oldPassword, newPassword) {
  return Auth.currentAuthenticatedUser()
    .then(user => Auth.changePassword(user, oldPassword, newPassword))
    .catch(err => hasFailed(err));
}

export function startResetPassword(email) {
  return Auth.forgotPassword(email).catch(err => hasFailed(err));
}

export function completeResetPassword(email, code, newPassword) {
  return Auth.forgotPasswordSubmit(email, code.toString(), newPassword).catch(
    err => hasFailed(err)
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
