export const isLenThree = (input) => {
  return input.length === 3;
}

export const isMadeByDigit = (input) => {
  const numArr = input.split('');
  return !numArr.some((ele) => ele < '1' || ele > '9');
}

export const isUnique = (input) => {
  return new Set(input).size === input.length;
}

export const isValidInput = (input) => {
  return isLenThree(input) && isMadeByDigit(input) && isUnique(input);
}