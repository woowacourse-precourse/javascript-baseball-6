import { Console } from '@woowacourse/mission-utils';
import { paramType } from '../utils/paramType';

export default class InputReader {
  #MESSAGE = {
    REQUEST_WINNING_NUMBERS: '숫자를 입력해주세요 : ',
    REQUEST_RESTART_NUMBER:
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  };
  constructor() {}

  async baseBallNumbers() {
    const userInput = await this.#onRead(this.#MESSAGE.REQUEST_WINNING_NUMBERS);
    return userInput;
  }

  async restartNumber() {
    const userInput = await this.#onRead(this.#MESSAGE.REQUEST_RESTART_NUMBER);
    return userInput;
  }

  async #onRead(text, _ = paramType(text, String)) {
    if (typeof text !== 'string')
      throw new Error('입력값이 string이 아닙니다.');
    const userInput = await Console.readLineAsync(text);
    return userInput;
  }
}
