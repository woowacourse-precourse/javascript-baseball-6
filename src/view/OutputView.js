import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages';

class OutputView {
  printStartGame() {
    Console.print(OUTPUT_MESSAGE.gameStart);
  }

  printGameEnd() {
    Console.print(OUTPUT_MESSAGE.gameEnd);
  }

  printHint(ball, strike) {
    const hint = [];

    if (ball !== 0) hint.push(`${ball}${OUTPUT_MESSAGE.ball}`);
    if (strike !== 0) hint.push(`${strike}${OUTPUT_MESSAGE.strike}`);

    Console.print(hint.join(' '));
  }

  printNothing() {
    Console.print(OUTPUT_MESSAGE.nothing);
  }
}

export default OutputView;
