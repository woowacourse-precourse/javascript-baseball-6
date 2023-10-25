export function validateNumber(number) {
  const numberSet = new Set(number);
  const numberRegExp = new RegExp(/[1-9]{3}/g);

  if (numberSet.size !== 3 || !numberRegExp.test(number)) {
    return false;
  }
  return true;
}
