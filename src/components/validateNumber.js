export function validateNumber(number) {
  const numberSet = new Set(number);
  const numberRegExp = /^[1-9]+$/;

  if (number.length !== 3 || numberSet.size !== 3 || !numberRegExp.test(number)) {
    return false;
  }
  return true;
}
