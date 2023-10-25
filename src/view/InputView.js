import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages';

class InputView {
  async readPlayerNumbers() {
    return await Console.readLineAsync(INPUT_MESSAGE.playerNumbers);
  }

  async readPlayerGameCode() {
    return await Console.readLineAsync(INPUT_MESSAGE.confirmRestart);
  }
}

export default InputView;
