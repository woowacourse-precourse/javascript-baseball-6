import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "../constants/Messages.js";

/**
 * 게임 시작 메시지를 출력한다.
 */
const GAME_START_VIEW = () => {
  Console.print(MESSAGES.GAME_START);
};

export default GAME_START_VIEW;
