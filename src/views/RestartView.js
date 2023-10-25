import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "../constants/Messages.js";

/**
 * 재시작 여부 입력을 받는다.
 */
const RESTART_VIEW = () => {
  return Console.readLineAsync(`${MESSAGES.RESTART}\n`);
};

export default RESTART_VIEW;
