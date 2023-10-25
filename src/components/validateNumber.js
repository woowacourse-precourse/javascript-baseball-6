export function validateNumber(number) {
  const numberSet = new Set(number);
  const numberRegExp = /^[1-9]{3}$/;

  if (numberSet.size !== 3 || !numberRegExp.test(number)) {
    return false;
  }
  return true;
}
