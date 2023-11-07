import { CONSTANTS } from '../constants/constants.js';

const { COST_PER_GAME, DRAW_SIZE, MAX_NUMBER, MIN_NUMBER } = CONSTANTS;

// LottoMachine
export const isNumber = (input) => {
  return !isNaN(input);
};

export const isValidCost = (cost) => {
  return cost % COST_PER_GAME === 0;
};

// Lotto
export const hasSixNumbers = (numbers) => {
  return numbers.length === DRAW_SIZE;
};

export const hasDuplicatedElements = (input) => {
  const set = new Set(input);
  return set.size !== input.length;
};

export const isNumbersInRange = (numbers) => {
  return (
    numbers.filter((number) => {
      return number >= MIN_NUMBER && number <= MAX_NUMBER;
    }).length !== DRAW_SIZE
  );
};

// WinnngLotto
export const isValidRange = (number) => {
  return number >= MIN_NUMBER && number <= MAX_NUMBER;
};

export const isAlreadyExist = (number, numbers) => {
  return numbers.includes(number);
};
