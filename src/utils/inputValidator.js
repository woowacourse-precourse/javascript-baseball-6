import {
  PATTERN,
  ERROR_MESSAGES,
  RESTART_GAME_NUMBERS,
} from '../../constants/index.js';

/**
 * 🧑‍🚀 Player-2: Player-1에서 입력받은 `input`에 대한 유효성 검사
 * @param {string} input
 * @returns
 */
export const validateNumberSet = (input) => {
  if (!PATTERN.threeDigitRegex.test(input))
    throw new Error(ERROR_MESSAGES.invalidCountNumber);
};

/**
 * 🧑‍🚀 Player-6: Player-5에서 입력받은 input의 유효성을 검사
 * @param {string} input
 * @returns
 */
export const validateRestartNumber = (input) => {
  if (
    input !== RESTART_GAME_NUMBERS.restart &&
    input !== RESTART_GAME_NUMBERS.end
  )
    throw new Error(ERROR_MESSAGES.invalidRestartNumber);
};
