import { Random, Console } from '@woowacourse/mission-utils';

export class BaseballService {
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

  refree(computer, baseballQueryInput) {
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < 3; ++i) {
      if (computer[i] === baseballQueryInput[i]) {
        strike++;
      } else if (computer.includes(baseballQueryInput[i])) {
        ball++;
      }
    }
    return { ball, strike };
  }

  async retry() {
    const baseballRetryInput = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
    this.validateRetryInput(baseballRetryInput);
    if (baseballRetryInput === '2') {
      return;
    }
    this.baseballQuery();
  }

  printResult(ball, strike) {
    if (!ball && !strike) {
      Console.print('낫싱');
      return;
    }
    Console.print(
      (ball ? `${ball}볼 ` : '') + (strike ? `${strike}스트라이크` : '')
    );
  }

  validateRetryInput(retry) {
    if (retry !== '1' && retry !== '2') {
      throw new Error('[ERROR] 1 또는 2를 입력하세요.');
    }
  }

  async baseballQuery() {
    const computer = this.generateRandomNumbers();
    while (true) {
      const baseballQueryInput = await Console.readLineAsync(
        '숫자를 입력해주세요 : '
      );
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
