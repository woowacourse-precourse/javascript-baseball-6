import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../utils/Constants';

export default class InputView {
  static async readUserInput() {
    const answer = await Console.readLineAsync(GAME_MESSAGE.INPUT);
    return answer;
  }

  static async readRetryAnswer() {
    const answer = await Console.readLineAsync(GAME_MESSAGE.RETRY);
    return answer;
  }
}
