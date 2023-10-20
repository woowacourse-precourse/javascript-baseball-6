import { Console } from "@woowacourse/mission-utils";
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
  } else {
    Console.print("낫싱");
  }
};

export default printResult;
