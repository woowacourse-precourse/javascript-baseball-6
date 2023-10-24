import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from '../../constants';
import {
  validateNumberSet,
  validateRestartNumber,
} from '../utils/inputValidator';

/**
 * 숫자야구 애플리케이션 Input View를 담당하는 클래스로서,
 * 사용자가 입력한 답변을 Promise를 통해 반환하는 책임을 갖음.
 */
class InputView {
  /**
   * 🧑‍🚀 Player-1: `숫자를 입력해주세요 : ` message를 출력하고 입력받은 input value를 Promise로 반환
   * @returns
   */
  static async getPlayerInput() {
    const playerInput = await Console.readLineAsync(GUIDE_MESSAGES.input);
    validateNumberSet(playerInput);
    return playerInput;
  }

  /**
   * 🧑‍🚀 Player-5: `게임을 다시 시작하려면 1, 종료하려면 ...` message를 출력하고 입력받은 input value를 Promise로 반환
   * @returns
   */
  static async getRestartInput() {
    const playerInput = await Console.readLineAsync(GUIDE_MESSAGES.restartGame);
    validateRestartNumber(playerInput);
    return playerInput;
  }
}

export default InputView;
