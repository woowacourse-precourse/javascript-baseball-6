import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../constant/message.js';
/**
 * @param {{strike: number, ball: number}}
 */

const printResult = function printStrikeAndBall({ strike, ball }) {
  if (strike > 0 && ball > 0) {
    Console.print(`${ball}볼 ${strike}스트라이크`);
  } else if (strike > 0) {
    Console.print(`${strike}스트라이크`);
  } else if (ball > 0) {
    Console.print(`${ball}볼`);
  } else if (strike === 0 && ball === 0) {
    Console.print('낫싱');
  } else {
    throw Error(ERROR_MESSAGE.unknown);
  }
};

export default printResult;
