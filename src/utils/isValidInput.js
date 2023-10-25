export const isValidInput = (input) => {
  if (input.length !== 3) {
    return false;
  }

  const numberArray = input.split('');
  const isOneToNine = (number) => '1' <= number && number <= '9';
  const isUniqueness =
    numberArray[0] !== numberArray[1] &&
    numberArray[1] !== numberArray[2] &&
    numberArray[2] !== numberArray[0];
  const isValid = numberArray.every(isOneToNine) && isUniqueness;

  if (isValid) {
    return true;
  }
  return false;
};
