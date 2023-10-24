import { Console } from '@woowacourse/mission-utils';

export default class InputReader {
  #MESSAGE = {
    REQUEST_WINNING_NUMBERS: '숫자를 입력해주세요 : ',
    REQUEST_RESTART_NUMBER:
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  };
  constructor() {}

  async baseBallNumbers() {
    return this.#onRead(this.#MESSAGE.REQUEST_WINNING_NUMBERS);
  }

  async restartNumber() {
    return this.#onRead(this.#MESSAGE.REQUEST_RESTART_NUMBER);
  }

  async #onRead(text) {
    if (typeof text !== 'string')
      throw new Error('입력값이 string이 아닙니다.');
    const userInput = await Console.readLineAsync(text);
    return userInput;
  }
}
