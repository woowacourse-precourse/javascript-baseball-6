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
    console.log(baseBallCountResult);

    if (isNothing) {
      this.#print(BASEBALL_TEXT.NOTHING);
      return;
    }

    if (!ball && strike) {
      this.#print(`${strike}${BASEBALL_TEXT.STRIKE}`);
      return;
    } else if (ball && !strike) {
      this.#print(`${ball}${BASEBALL_TEXT.BALL}`);
      return;
    } else {
      this.#print(
        `${ball}${BASEBALL_TEXT.BALL} ${strike}${BASEBALL_TEXT.STRIKE}`
      );
    }
  }

  #print(text, _ = paramType(text, String)) {
    Console.print(text);
  }
}
