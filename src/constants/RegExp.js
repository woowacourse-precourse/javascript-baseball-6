import { RULE } from './Rule.js';

const getRandomNumberRegExp = () => {
  const { rangeOfNumber, lengthOfNumbers } = RULE;
  const { start, end } = rangeOfNumber;
  return new RegExp(`^[${start}-${end}]{${lengthOfNumbers}}$`);
};
const RANDOM_NUMBERS_REG_EXP = Object.freeze(getRandomNumberRegExp());

const RESTART_INPUT_REG_EXP = Object.freeze(
  new RegExp(`^[${RULE.reStartNumber},${RULE.endNumber}]$`),
);

export { RANDOM_NUMBERS_REG_EXP, RESTART_INPUT_REG_EXP };
