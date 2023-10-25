import { DIGIT_COUNT } from './constants.js';

export const isValidInput = (input) => {
  if (input.length !== 3) {
    return false;
  }

  const numberArray = input.split('');
  const set = new Set(numberArray);

  const isUnique = set.size === DIGIT_COUNT;
  const isOneToNine = (number) => '1' <= number && number <= '9';

  return numberArray.every(isOneToNine) && isUnique;
};
