import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },
  printResult(result) {
    const { ball, strike } = result;
    if (ball === 0 && strike === 0) {
      Console.print('낫싱');
      return;
    }
    if (ball > 0 && strike === 0) {
      Console.print(`${ball}볼`);
      return;
    }
    if (ball === 0 && strike > 0) {
      Console.print(`${strike}스트라이크`);
      return;
    }
    if (ball > 0 && strike > 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
      return;
    }
  },
  printEndMessage() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  },
};

export default OutputView;
