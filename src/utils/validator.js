import { CONSTANTS } from '../constants/constants';

const { COST_PER_GAME, DRAW_SIZE } = CONSTANTS;

// LottoMachine
export const isNumber = (input) => {
  return !isNaN(Number(input));
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
