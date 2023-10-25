import { MissionUtils } from "@woowacourse/mission-utils";



class App {
  constructor() {
    this.secretNumbers = [];
    this.attempts = 0;
  }

  generateSecretNumbers() {
    while (this.secretNumbers.length < 3) {
      const number = this.getRandomNumberInRange(1, 9);
      if (!this.secretNumbers.includes(number)) {
        this.secretNumbers.push(number);
      }
    }
  }

  getRandomNumberInRange(min, max) {
    return MissionUtils.Random.pickNumberInRange(min, max);
  }

  async play() {
    this.generateSecretNumbers();
    MissionUtils.Console.print("숫자 야구 게임에 오신 것을 환영합니다!");

    while (true) {
      const guess = await this.getGuessFromUserAsync();
      const result = this.checkGuess(guess);

      MissionUtils.Console.print(`결과: ${result.join(', ')}`);

      if (result.every(value => value === '스트라이크')) {
        MissionUtils.Console.print(`축하합니다! ${this.attempts}번 만에 숫자를 맞추셨습니다.`);
        break;
      }

      this.attempts++;
    }
  }

  async getGuessFromUserAsync() {
    const guessString = await MissionUtils.Console.readLineAsync("추측 숫자를 입력하세요 (3개의 숫자를 입력 후 엔터):");
    const guess = guessString.trim().split('').map(num => parseInt(num));

    if (guess.length !== 3 || guess.some(isNaN)) {
      MissionUtils.Console.print("잘못된 입력입니다. 3개의 숫자를 입력하세요.");
      return this.getGuessFromUserAsync();
    }

    return guess;
  }

  checkGuess(guess) {
    const result = [];
    for (let i = 0; i < 3; i++) {
      if (guess[i] === this.secretNumbers[i]) {
        result.push('스트라이크');
      } else if (this.secretNumbers.includes(guess[i])) {
        result.push('볼');
      } else {
        result.push('아웃');
      }
    }
    return result;
  }
}

const app = new App();
app.play();