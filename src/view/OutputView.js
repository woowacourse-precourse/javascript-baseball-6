import { Console } from '@woowacourse/mission-utils';
import { paramType } from '../utils/paramType.js';
import { GAME_MESSAGE } from '../constants/gameMessage.js';
import { BASEBALL_TEXT } from '../constants/baseBallText.js';

export default class OutputView {
  constructor() {}

  printGameStartMessage() {
    this.#print(GAME_MESSAGE.START);
  }

  printGameEndMessage() {
    this.#print(GAME_MESSAGE.END);
  }

  printBaseBallCountResult(
    baseBallCountResult,
    _ = paramType(baseBallCountResult, Object)
  ) {
    const { strike, ball, isNothing } = baseBallCountResult;

    if (!ball && strike) {
      this.#print(`${strike}${BASEBALL_TEXT.STRIKE}`);
      return;
    }
    if (ball && !strike) {
      this.#print(`${ball}${BASEBALL_TEXT.BALL}`);
      return;
    }
    if (isNothing) {
      this.#print(BASEBALL_TEXT.NOTHING);
      return;
    }
    this.#print(
      `${ball}${BASEBALL_TEXT.BALL} ${strike}${BASEBALL_TEXT.STRIKE}`
    );
  }

  printThreeStrikes() {
    this.#print(`3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
  }

  #print(text, _ = paramType(text, String)) {
    Console.print(text);
  }
}
