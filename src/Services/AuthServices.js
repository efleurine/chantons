import * as AWSAuth from "../Helpers/AWSAuth";

/**
 *
 * @param The user  email for the resistration
 * @param The user password
 */
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

export async function sendResetCode(email) {
  return AWSAuth.startResetPassword(email);
}

export async function resetPasswordWithCode(email, code, newPassword) {
  return AWSAuth.completeResetPassword(email, code, newPassword);
}

export function getCurrentSession() {
  return AWSAuth.getCurrentSession();
}

export function getFederatedInfo() {
  return AWSAuth.getFederatedInfo();
}
