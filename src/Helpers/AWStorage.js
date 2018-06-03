import { Storage } from "aws-amplify";
import { errorLogger } from "../Services/LogServices";

// There is also a shortcut vault, which is merely a Storage instance with private level set:
// Protected is like sharing for other authenticated user - not fine graine access control

export const defaultContentType = "binary/octet-stream";
function put(options = {}) {
  const name = options.name || "default.txt";
  const data = options.data || "You should add your own content";
  const level = options.level || "private";
  const contentType = options.contentType || defaultContentType;
  return Storage.put(name, data, {
    level,
    contentType
  });
}

function get(options = {}) {
  const name = options.name || "default.txt";
  const level = options.level || "private";
  return Storage.get(name, {
    level
  });
}

export function putInPublic(name, data, contentType) {
  const finalOptions = {
    name,
    data,
    contentType,
    level: "public"
  };
  return put(finalOptions).catch(err => {
    errorLogger("Could not upload to S3 in public mode", err);
    return false;
  });
}

export function putInProtected(name, data, contentType) {
  const finalOptions = {
    name,
    data,
    contentType,
    level: "protected"
  };
  return put(finalOptions).catch(err => {
    errorLogger("Could not upload to S3 in protected mode", err);
    return false;
  });
}

export function putInPrivate(name, data, contentType) {
  const finalOptions = {
    name,
    data,
    contentType,
    level: "private"
  };
  return put(finalOptions).catch(err => {
    errorLogger("Could not upload to S3 in private mode", err);
    return false;
  });
}

export function getFromPublic(name) {
  return get({
    name,
    level: "public"
  }).catch(err => {
    errorLogger("Could not get from S3 in public mode", err);
    return false;
  });
}

export function getFromProtected(name) {
  return get({
    name,
    level: "protected"
  }).catch(err => {
    errorLogger("Could not get from S3 in protected mode", err);
    return false;
  });
}

export function getFromPrivate(name) {
  return get({
    name,
    level: "private"
  }).catch(err => {
    errorLogger("Could not get from S3 in private mode", err);
    return false;
  });
}

export function removeFromPublic(name) {
  return Storage.remove(name).catch(err => {
    errorLogger("Could not remove from S3 in public mode", err);
    return false;
  });
}

export function removeFromProtected(name) {
  return Storage.remove(name, { level: "protected" }).catch(err => {
    errorLogger("Could not remove from S3 in protected mode", err);
    return false;
  });
}

export function removeFromPrivate(name) {
  return Storage.remove(name, { level: "private" }).catch(err => {
    errorLogger("Could not remove from S3 in private mode", err);
    return false;
  });
}

export function checkFileExits() {}
