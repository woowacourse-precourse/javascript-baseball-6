import { Random, Console } from '@woowacourse/mission-utils';

export class BaseballService {
  query = '';

  generateRandomNumbers() {}

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
