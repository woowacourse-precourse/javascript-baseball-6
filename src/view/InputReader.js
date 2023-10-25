import { Console } from '@woowacourse/mission-utils';
import { paramType } from '../utils/paramType.js';
import { GAME_MESSAGE } from '../constants/gameMessage.js';

export default class InputReader {
  constructor() {}

  async baseBallNumbers() {
    const userInput = await this.#onRead(GAME_MESSAGE.REQUEST_WINNING_NUMBERS);
    return userInput;
  }

  async restartNumber() {
    const userInput = await this.#onRead(GAME_MESSAGE.REQUEST_RESTART_NUMBER);
    return userInput;
  }

  async #onRead(text, _ = paramType(text, String)) {
    const userInput = await Console.readLineAsync(text);
    return userInput;
  }
}
