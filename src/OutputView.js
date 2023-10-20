import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  static printResult(template) {
    Console.print(template);
  }
  static printFinish() {
    Console.print('게임 종료');
  }
}
