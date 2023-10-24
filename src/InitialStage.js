import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "./Messages.js";

/**
 * 초기 단계(사용자 입력 직전까지)를 담당하는 클래스
 */
class InitialStage {
  /**
   * 게임 시작 메시지를 출력한다.
   */
  messagePrint() {
    Console.print(MESSAGES.GAME_START);
  }
}

export default InitialStage;
