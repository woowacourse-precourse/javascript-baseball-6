import { Console } from '@woowacourse/mission-utils';
import { paramType } from '../utils/paramType.js';
import { GAME_MESSAGE } from '../constants/gameMessage.js';

export default class InputReader {
  constructor() {}

  async baseBallNumbers() {
    try {
      return await this.#onRead(GAME_MESSAGE.REQUEST_WINNING_NUMBERS);
    } catch (error) {
      throw error;
    }
  }

  async restartNumber() {
    try {
      return await this.#onRead(GAME_MESSAGE.REQUEST_RESTART_NUMBER);
    } catch (error) {
      throw error;
    }
  }

  async #onRead(text, _ = paramType(text, String)) {
    try {
      return await Console.readLineAsync(text);
    } catch (error) {
      throw error;
    }
  }
}
