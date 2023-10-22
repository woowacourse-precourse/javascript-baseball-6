import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },

  printResult(ball, strike) {
    if (!ball && !strike) Console.print('낫싱');
    if (ball && !strike) Console.print(`${ball}볼`);
    if (!ball && strike) Console.print(`${strike}스트라이크`);
    if (ball && strike) Console.print(`${ball}볼 ${strike}스트라이크`);
  },

  printDone() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  },
};

export default OutputView;
