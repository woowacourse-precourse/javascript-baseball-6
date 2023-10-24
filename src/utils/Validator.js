import { SETTING } from './Constants';

const { MAX_INPUT_LENGTH, RESTART, END } = SETTING;

export const validator = {
  isNumber(input) {
    const regex = /[1-9]{3}/g;
    return regex.test(Number(input));
  },

  isCorrectLength(input) {
    return input.length === MAX_INPUT_LENGTH;
  },

  isDuplicate(input) {
    return new Set(input).size === MAX_INPUT_LENGTH;
  },

  isRestartNumber(input) {
    return Number(input) === RESTART || Number(input) === END;
  },
};
