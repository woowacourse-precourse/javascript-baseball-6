import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },

  printResult(ball, strike) {
    const result = [];
    if (ball) result.push(ball + '볼');
    if (strike) result.push(strike + '스트라이크');
    Console.print(result.length ? result.join(' ') : '낫싱');
  },

  printSuccess() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  },
};

export default OutputView;
