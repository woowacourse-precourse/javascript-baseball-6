import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES } from '../utils/constants.js';
import { getResultMessage, getResultString } from '../utils/viewUtils.js';

export default class OutputView {
  printStart() {
    Console.print(GAME_MESSAGES.start);
  }

  printMatchResult(matchResult) {
    const resultText = getResultMessage(matchResult);
    Console.print(resultText);
  }
}
