export function isEmpty(value) {
  return !value || value.trim === "";
}
export function isEmailValid(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailRegex.test(value);
}
export function isContactValid(value) {
  const numberRegex = /^\d+$/;
  return !numberRegex.test(value);
}
