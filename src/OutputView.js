import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../utils/Constants';

export default class OutputView {
  static printStart() {
    Console.print(GAME_MESSAGE.START);
  }

  static printResult(template) {
    Console.print(template);
  }

  static printCorrect() {
    Console.print(GAME_MESSAGE.CORRECT);
  }

  static printFinish() {
    Console.print(GAME_MESSAGE.FINISH);
  }
}
