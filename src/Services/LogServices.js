export function l(d) {
  console.log(d);
}

export function errorLogger(info, error) {
  console.error(info, error);
}

export function logE(error, info = "No More Info") {
  console.error(info, "\n", error);
}
