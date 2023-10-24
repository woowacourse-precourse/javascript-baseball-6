import { Console } from ('@woowacourse/mission-utils');
import { Messages } from './Messages.js';

/**
 * 초기 단계(사용자 입력 직전까지)를 담당하는 클래스
 */
class InitialStage {
  messagePrint() {
    Console.print(Messages.GAME_START);
  };
}
