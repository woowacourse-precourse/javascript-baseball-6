import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printStartString() {
    Console.print(MESSAGE.print.gameStart);
  },
};

export default OutputView;
