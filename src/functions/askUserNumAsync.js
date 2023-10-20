import { Console } from "@woowacourse/mission-utils";

/**
 * @param {string} message
 */

async function askUserNumAsync(message) {
  const userStr = await Console.readLineAsync(message);
  const userNum = Array.from(userStr, Number);
  return userNum;
}

export default askUserNumAsync;
