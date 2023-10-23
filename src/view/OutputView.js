import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  #MESSAGE = {
    GAME_START: '숫자 야구 게임을 시작합니다.',
    GAME_END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  };

  #BASEBALL_WORD = {
    BALL: '볼',
    STRIKE: '스트라이크',
    NOTHING: '낫싱',
  };

  constructor() {}

  printGameStartMessage() {
    this.#print(this.#MESSAGE.GAME_START);
  }

  printGameEndMessage() {
    this.#print(this.#MESSAGE.GAME_END);
  }

  printBaseBallCountResult(baseBallCountResult) {
    const { strike, ball, isNothing } = baseBallCountResult;

    if (!ball && strike) {
      this.#print(`${strike}${this.#BASEBALL_WORD.STRIKE}`);
      return;
    }
    if (ball && !strike) {
      this.#print(`${ball}${this.#BASEBALL_WORD.BALL}`);
      return;
    }
    if (isNothing) {
      this.#print(this.#BASEBALL_WORD.NOTHING);
      return;
    }
    this.#print(
      `${ball}${this.#BASEBALL_WORD.BALL}` +
        ' ' +
        `${strike}${this.#BASEBALL_WORD.STRIKE}`
    );
  }

  #print(text) {
    if (typeof text !== 'string')
      throw new Error('string 형식의 message만 입력해주세요.');
    Console.print(text);
  }
}
