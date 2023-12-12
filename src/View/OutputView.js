import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, OUTPUT_MESSAGE } from '../Constant/Message.js';
export const OutputView = {
  printGameStart() {
    Console.print(OUTPUT_MESSAGE.START);
  },
  printSuccess() {
    Console.print(OUTPUT_MESSAGE.SUCCESS);
  },
  printResult(ball, strike) {
    Console.print(`${ball}볼 ${strike}스트라이크`);
  },
  printStrike(strike) {
    Console.print(`${strike}스트라이크`);
  },
  printBall(ball) {
    Console.print(`${ball}볼`);
  },
  printError() {
    Console.print(ERROR_MESSAGE.DEFAULT);
  },
};
