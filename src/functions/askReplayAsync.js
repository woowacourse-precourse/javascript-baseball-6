import { Console } from "@woowacourse/mission-utils";
import { ONE_OR_TWO_REGEX } from "../constant/regex.js";
import { ERROR_MESSAGE } from "../constant/message.js";

/**
 * @returns {boolean}
 */
const askReplayAsync = async function readReplayValueFromUser(message) {
  const willReplay = await Console.readLineAsync(message);
  const isValid = ONE_OR_TWO_REGEX.test(willReplay);

  if (!isValid) {
    throw Error(ERROR_MESSAGE.INVALID_INPUT);
  }

  if (willReplay === "1") {
    return false;
  } else if (willReplay === "2") {
    return true;
  }

  return false;
};

export default askReplayAsync;
