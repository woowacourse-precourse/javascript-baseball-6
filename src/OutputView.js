import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../utils/Constants.js';

export default class OutputView {
  static printResult(template) {
    Console.print(template);
  }
  static printFinish() {
    Console.print(GAME_MESSAGE.FINISH);
  }
}
