import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "../constants/Messages.js";

/**
 * 사용자의 숫자 입력을 받는다
 */
const INPUT_NUMBER_VIEW = () => {
  return Console.readLineAsync(MESSAGES.INPUT_NUMBER);
};

export default INPUT_NUMBER_VIEW;
