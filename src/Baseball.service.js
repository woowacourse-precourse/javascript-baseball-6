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

  validateBaseballQueryInput(balls) {
    if (
      balls.length !== 3 ||
      Number.isNaN(Number(balls)) ||
      balls.indexOf('0') !== -1
    ) {
      throw new Error(`[ERROR] 숫자가 잘못된 형식입니다.`);
    }
    const selected = [];
    for (let i = 0; i < 3; ++i) {
      if (selected.includes(balls[i])) {
        throw new Error(`[ERROR] 중복된 숫자가 있습니다.`);
      }
      selected.push(balls[i]);
    }
  }

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
