import { PATTERN, ERROR_MESSAGES } from '../../constants/index.js';

/**
 * 플레이어가 입력한 numberSet에 대한 유효성 검사
 * @param {string} input
 * @returns
 */
export const numberSetValidator = (input) => {
  if (!PATTERN.THREE_DIGIT_PATTERN.test(input))
    throw new Error(ERROR_MESSAGES.INVALID_COUNT_NUMBER);
  return input;
};

/**
 * 플레이어가 입력한 재시작 input에 대한 유효성 검사
 * @param {string} input
 * @returns
 */
export const playAgainNumberValidator = (input) => {
  if (input !== '1' && input !== '2')
    throw new Error(ERROR_MESSAGES.INVALID_REPLAY_NUMBER);
  return input;
};
