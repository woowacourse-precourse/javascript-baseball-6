import { Console } from '@woowacourse/mission-utils';

const printResult = ({ strike, ball }) => {
  if (ball > 0 && strike > 0) {
    Console.print(`${ball}볼 ${strike}스트라이크`);
  } else if (ball > 0) {
    Console.print(`${ball}볼`);
  } else if (strike > 0) {
    if (strike === 3) {
      Console.print('3스트라이크');
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    } else {
      Console.print(`${strike}스트라이크`);
    }
  } else {
    Console.print('낫싱');
  }
};

export { printResult };
