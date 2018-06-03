import * as AWStorage from "../Helpers/AWStorage";

export async function putInPublic(name, data, contentType) {
  return AWStorage.putInPublic(name, data, contentType);
}

export async function putInProtected(name, data, contentType) {
  return AWStorage.putInProtected(name, data, contentType);
}

export async function putInPrivate(name, data, contentType) {
  return AWStorage.putInPrivate(name, data, contentType);
}

export async function getFromPublic(name) {
  return AWStorage.getFromPublic(name);
}

export async function getFromProtected(name) {
  return AWStorage.getFromProtected(name);
}

export async function getFromPrivate(name) {
  return AWStorage.getFromPrivate(name);
}

export async function removeFromPublic(name) {
  return AWStorage.removeFromPublic(name);
}

export async function removeFromProtected(name) {
  return AWStorage.removeFromProtected(name);
}

export async function removeFromPrivate(name) {
  return AWStorage.removeFromPrivate(name);
}
