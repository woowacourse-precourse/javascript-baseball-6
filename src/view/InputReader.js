import { Console } from '@woowacourse/mission-utils';
import { paramType } from '../utils/paramType.js';
import { GAME_MESSAGE } from '../constants/gameMessage.js';

export default class InputReader {
  constructor() {}

  async baseBallNumbers() {
    return await this.#onRead(GAME_MESSAGE.REQUEST_WINNING_NUMBERS);
  }

  async restartNumber() {
    return await this.#onRead(GAME_MESSAGE.REQUEST_RESTART_NUMBER);
  }

  async #onRead(text, _ = paramType(text, String)) {
    try {
      return await Console.readLineAsync(text);
    } catch (error) {
      throw new Error('[ERROR] invalid input');
    }
  }
}
