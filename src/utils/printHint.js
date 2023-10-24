const { Console } = require('@woowacourse/mission-utils');

function printHint({ ball, strike }) {
  if (ball === 0 && strike === 0) Console.print(`낫싱`);
  if (ball > 0 && strike > 0) Console.print(`${ball}볼 ${strike}스트라이크`);
  if (ball > 0 && strike === 0) Console.print(`${ball}볼`);
  if (ball === 0 && strike > 0) Console.print(`${strike}스트라이크`);
}

export default printHint;
