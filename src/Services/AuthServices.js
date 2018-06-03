import * as AWSAuth from "../Helpers/AWSAuth";

export async function signup(email, password) {
  return AWSAuth.signup(email, password);
}

export async function confirmUser(email, authCode) {
  return AWSAuth.confirmUser(email, authCode);
}

export async function signin(email, passsword) {
  return AWSAuth.signin(email, passsword);
}

export async function signout() {
  return AWSAuth.signout();
}

export async function changePassword(oldPassword, newPassword) {
  return AWSAuth.changePassword(oldPassword, newPassword);
}

export async function startResetPassword(email) {
  return AWSAuth.startResetPassword(email);
}

export async function completeResetPassword(email, code, newPassword) {
  return AWSAuth.completeResetPassword(email, code, newPassword);
}

export function getCurrentSession() {
  return AWSAuth.getCurrentSession();
}

export function getFederatedInfo() {
  return AWSAuth.getFederatedInfo();
}
