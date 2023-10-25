const { Console, MissionUtils } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.targetNumbers = this.generateTargetNumbers();
    this.attempts = 0;
  }

  generateTargetNumbers() {
    const target = [];
    while (target.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!target.includes(number)) {
        target.push(number);
      }
    }
    return target;
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    while (true) {
      const input = await Console.readLineAsync(
        '서로 다른 3자리 숫자를 입력하세요: '
      );
      const inputNumbers = input.split('').map(Number);
      if (inputNumbers.length !== 3 || inputNumbers.some(isNaN)) {
        throw new Error('[ERROR]');
      }

      this.attempts++;

      const result = this.calculateResult(inputNumbers);
      Console.print(result);

      if (this.isGameOver(result)) {
        this.endGame();
        break;
      }
    }
  }

  calculateResult(input) {
    const result = { strikes: 0, balls: 0 };

    for (let i = 0; i < 3; i++) {
      if (input[i] === this.targetNumbers[i]) {
        result.strikes++;
      } else if (this.targetNumbers.includes(input[i])) {
        result.balls++;
      }
    }

    if (result.strikes === 3) {
      return `3스트라이크`;
    } else if (result.strikes === 0 && result.balls === 0) {
      return '낫싱';
    } else {
      return `${result.balls > 0 ? `${result.balls}볼 ` : ''}${
        result.strikes > 0 ? `${result.strikes}스트라이크` : ''
      }`;
    }
  }

  isGameOver(result) {
    return result.includes('3스트라이크');
  }

  async endGame() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    const restart = await Console.readLineAsync(
      '게임을 다시 시작하려면 1, 종료하려면 2를 입력하세요: '
    );
    if (restart === '1') {
      this.targetNumbers = this.generateTargetNumbers();
      this.attempts = 0;
      this.play();
    }
  }
}

const app = new App();
export default App;