import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.computerNumbers = [];
    this.generateComputerNumbers();
  }

  generateComputerNumbers() {
    while (this.computerNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
  }

  calculateScore(guess) {
    let balls = 0;
    let strikes = 0;

    for (let i = 0; i < 3; i++) {
      if (guess[i] === this.computerNumbers[i]) {
        strikes++;
      } else if (this.computerNumbers.includes(guess[i])) {
        balls++;
      }
    }

    return { balls, strikes };
  }

  isValidInput(input) {
    if (!input) {
      return false;
    }
    const uniqueDigits = new Set(input.split(''));
    return uniqueDigits.size === 3 && /^[1-9]{3}$/.test(input);
  }

  async postGameChoice() {
    const choice = await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
    if (choice === '1') {
      this.computerNumbers = [];
      this.generateComputerNumbers();
      await this.play();
    } else if (choice === '2') {
      MissionUtils.Console.print('게임을 종료합니다. 감사합니다!');
    } else {
      MissionUtils.Console.print(
        '[ERROR] 잘못된 입력입니다. 1 또는 2를 입력해주세요.'
      );
      await this.postGameChoice();
    }
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    while (true) {
      const input = await MissionUtils.Console.readLineAsync(
        '숫자를 입력해주세요 : '
      );

      if (!this.isValidInput(input)) {
        throw new Error(
          '[ERROR] 잘못된 입력입니다. 1-9 사이의 서로 다른 3개의 숫자를 입력해주세요.'
        );
      }

      const guess = input.split('').map(Number);
      const { balls, strikes } = this.calculateScore(guess);

      if (strikes === 3) {
        MissionUtils.Console.print(
          '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료'
        );
        await this.postGameChoice();
        return;
      } else if (balls === 0 && strikes === 0) {
        MissionUtils.Console.print('낫싱');
      } else {
        MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
      }
    }
  }
}

export default App;
