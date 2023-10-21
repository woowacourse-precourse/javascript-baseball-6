import { Console } from "@woowacourse/mission-utils";
import { THREE_DIGIT_REGEX } from "../constant/regex.js";
import { ERROR_MESSAGE } from "../constant/message.js";

/**
 * @param {string} message
 */

const askUserNumAsync = async function readNumListFromUser(message) {
  const userStr = await Console.readLineAsync(message);

  if (!THREE_DIGIT_REGEX.test(userStr)) {
    throw new Error(ERROR_MESSAGE.INVALID_INPUT);
  }

  const userNum = Array.from(userStr, Number);

  return userNum;
};

export default askUserNumAsync;
