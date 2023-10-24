import CONSTANTS from '../Constants';
import MESSAGES from '../Messages';
import {Console} from '@woowacourse/mission-utils';

const OutputView = {
  printStart() {
    Console.print(MESSAGES.start);
  },
  printResult({ball, strike}) {
    let result = '';
    if (ball > CONSTANTS.nothing) result += ball + MESSAGES.ball;
    if (strike > CONSTANTS.nothing) result += strike + MESSAGES.strike;
    if (ball === CONSTANTS.nothing && strike === CONSTANTS.nothing) result = MESSAGES.nothing;
    Console.print(result.trim());
    if (strike === CONSTANTS.winningStrike) Console.print(MESSAGES.correct);
  },
};

export default OutputView;
