export function l(d) {
  console.log(d);
}

export function errorLogger(info, error) {
  console.info(info, error);
}

export function logE(error, info = "No More Info") {
  console.info(info, "\n", error);
}

export function hasFailed(error) {
  logE(error);
  return { _hasFailed: true, error };
}
