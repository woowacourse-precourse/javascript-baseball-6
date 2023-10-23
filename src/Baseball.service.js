import { Random, Console } from '@woowacourse/mission-utils';

export class BaseballService {
  query = '';

  generateRandomNumbers() {
    const computer = [];
    const selected = new Array(10).fill(false);
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!selected[number]) {
        selected[number] = true;
        computer.push(number.toString());
      }
    }
    return computer;
  }

  validateBaseballQueryInput() {}

  refree() {}

  async retry() {}

  printResult() {}

  validateRetryInput(retry) {}

  async baseballQuery() {
    const computer = this.generateRandomNumbers();
    while (true) {
      Console.print('숫자를 입력해주세요 : ');
      const baseballQueryInput = await Console.readLineAsync(this.query);
      this.validateBaseballQueryInput(baseballQueryInput);
      const { ball, strike } = this.refree(computer, baseballQueryInput);
      this.printResult(ball, strike);
      if (strike === 3) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        break;
      }
    }
    await this.retry();
  }
}
