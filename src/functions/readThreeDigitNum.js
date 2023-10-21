import { Console } from '@woowacourse/mission-utils';
import { THREE_DIGIT_REGEX } from '../constant/regex.js';
import { ERROR_MESSAGE } from '../constant/message.js';
import checkDuplication from '../utils/checkDuplication.js';

/**
 * @param {string} message
 * @returns {number[]}
 */

const readThreeDigitNum = async function readThreeDigitNumFromUser(message) {
  const userStr = await Console.readLineAsync(message);
  const isDuplicated = checkDuplication(userStr);
  const isThreeDigit = THREE_DIGIT_REGEX.test(userStr);
  const isValid = isThreeDigit && !isDuplicated;

  if (!isValid) {
    throw new Error(ERROR_MESSAGE.INVALID_INPUT);
  }

  const userNum = Array.from(userStr, Number);

  return userNum;
};

export default readThreeDigitNum;
