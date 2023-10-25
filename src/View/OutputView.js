import { Console } from '@woowacourse/mission-utils';

const START_OUTPUT_MESSAGE = '숫자 야구 게임을 시작합니다.';
const BALL_OUTPUT_MESSAGE = '볼';
const STRIKE_OUTPUT_MESSAGE = '스트라이크';
const NOTHING_OUTPUT_MESSAGE = '낫싱';
const SUCCESS_OUTPUT_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';

const OutputView = {
  printStart() {
    Console.print(START_OUTPUT_MESSAGE);
  },

  printResult(ball, strike) {
    const result = [];
    if (ball) result.push(ball + BALL_OUTPUT_MESSAGE);
    if (strike) result.push(strike + STRIKE_OUTPUT_MESSAGE);
    Console.print(result.length ? result.join(' ') : NOTHING_OUTPUT_MESSAGE);
  },

  printSuccess() {
    Console.print(SUCCESS_OUTPUT_MESSAGE);
  },
};

export default OutputView;
