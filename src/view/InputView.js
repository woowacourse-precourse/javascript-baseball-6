import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from '../../constants/index.js';
import {
  validateNumberSet,
  validateRestartNumber,
} from '../utils/inputValidator.js';

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
