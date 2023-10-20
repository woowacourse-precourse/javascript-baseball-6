import { Console } from "@woowacourse/mission-utils";

/**
 * @returns {boolean}
 */
const askReplayAsync = async function readReplayValueFromUser(message) {
  const response = await Console.readLineAsync(message);
  if (response === "1") {
    return false;
  } else if (response === "2") {
    return true;
  } else {
    return true;
  }
};

export default askReplayAsync;
