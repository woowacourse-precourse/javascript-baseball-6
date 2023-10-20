import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE_METHOD, OUTPUT_MESSAGE_TEXT } from '../constants/message';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printStartGame() {
    this.print(OUTPUT_MESSAGE_TEXT.gameStart);
  },

  printCompareResult({ strike, ball }) {
    this.print(OUTPUT_MESSAGE_METHOD.compareResult({ strike, ball }));
  },

  printExitGame() {
    this.print(OUTPUT_MESSAGE_TEXT.exitGame);
  },
};

export default OutputView;
