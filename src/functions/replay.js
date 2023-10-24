import { Console } from "@woowacourse/mission-utils";
import { ERROR, MESSAGE } from "../constants/constants.js";

const replay = async () => {
  const replay_answer = await Console.readLineAsync(`${MESSAGE.REPLAY} \n`);

  if (replay_answer === "1") {
    return true;
  } else if (replay_answer === "2") {
    return false;
  } else {
    throw new Error(ERROR.REPLAY_FORMAT_ERROR);
  }
};

export default replay;
