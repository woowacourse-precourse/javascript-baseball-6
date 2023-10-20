import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printStartGame() {
    this.print(OUTPUT_MESSAGE.gameStart);
  },
};

export default OutputView;
