import { AsyncStorage } from "react-native";
import { logE } from "../Services/LogServices";

export async function setItem(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    // Error saving data
    logE(error, "Could not setItem");
    return false;
  }
}

export async function getItem(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    logE(error, "Could not getItem");
    // Error retrieving data
    return null;
  }
}

export async function removeItem(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    // Error retrieving data
    logE(error, "Could not removeItem");
    return false;
  }
}

export async function getAllKeys() {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (error) {
    // Error retrieving data
    logE(error, "Could not getAllKeys");
    return null;
  }
}

// export async function flushGetRequests() {} not sure to understand it for now

export async function multiGet(keys) {
  try {
    const kValues = await AsyncStorage.multiGet(keys);
    return flattenMultiGet(kValues);
  } catch (error) {
    // Error retrieving data
    logE(error, "Could not multiGet");
    return null;
  }
}

export function flattenMultiGet(kValues) {
  return kValues.reduce((obj, value) => {
    const [a, b] = JSON.parse(value);
    obj[a] = b;
    return obj;
  }, {});
}

export async function multiSet(keyValuePairs) {
  try {
    await AsyncStorage.multiSet(objectToArray(keyValuePairs));
    return true;
  } catch (error) {
    logE(error, "Could not multiSet");
    return false;
  }
}

export function objectToArray(obj) {
  const keys = Object.keys(obj);
  return keys.map(el => [el, JSON.stringify(obj[el])]);
}

export async function multiRemove(keys) {
  try {
    await AsyncStorage.multiRemove(keys);
    return true;
  } catch (error) {
    logE(error, "Could not multiRemove");
    return false;
  }
}
