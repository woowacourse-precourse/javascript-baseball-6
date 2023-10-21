import { Console } from "@woowacourse/mission-utils";
import { THREE_DIGIT_REGEX } from "../constant/regex.js";
import { ERROR_MESSAGE } from "../constant/message.js";

/**
 * @param {string} message
 */

const askUserNumAsync = async function readNumListFromUser(message) {
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

/**
 *
 * @param {string} str
 */
const checkDuplication = function (str) {
  const charSet = new Set(str);

  if (str.length !== charSet.size) {
    return true;
  }

  return false;
};

export default askUserNumAsync;
