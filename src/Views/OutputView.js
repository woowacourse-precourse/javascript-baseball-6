import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES } from '../utils/constants.js';
import { getResultMessage } from '../utils/viewUtils.js';

class OutputView {
  printStart() {
    Console.print(GAME_MESSAGES.start);
  }

  printMatchResult(matchResult) {
    const resultText = getResultMessage(matchResult);
    Console.print(resultText);
  }
}

export default OutputView;
