import { BASEBALL_NUMBER } from '../constants/gameConfig.js';

export const isBaseballNumber = (number) =>
  number <= BASEBALL_NUMBER.MAX && number >= BASEBALL_NUMBER.MIN;
