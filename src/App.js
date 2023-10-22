const readline = require('readline');
const { MissionUtils } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumbers = this.generateRandomNumbers();
    this.attempts = 0;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  async play() {
    console.log('숫자 야구 게임을 시작합니다.');

    while (true) {
      const userInput = await this.getUserInput();

      if (userInput === '2') {
        console.log('게임을 종료합니다.');
        break;
      }

      if (this.isValidInput(userInput)) {
        const result = this.calculateResult(userInput);

        if (result === '3스트라이크') {
          console.log('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          if (await this.askForRestart()) {
            this.computerNumbers = this.generateRandomNumbers();
            this.attempts = 0;
          } else {
            console.log('게임을 종료합니다.');
            break;
          }
        } else {
          console.log(result);
        }
      } else {
        console.log('[ERROR] 숫자가 잘못된 형식입니다.');
      }
    }
  }

  generateRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async getUserInput() {
    while (true) {
      const userInput = await this.questionAsync('숫자를 입력해주세요 : ');

      if (this.isValidInput(userInput)) {
        return userInput;
      } else if (userInput === '2') {
        return userInput;
      } else {
        console.log('[ERROR] 숫자가 잘못된 형식입니다.');
      }
    }
  }

  async askForRestart() {
    const choice = await this.questionAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: ');
    return choice === '1';
  }

  questionAsync(prompt) {
    return new Promise((resolve) => {
      this.rl.question(prompt, resolve);
    });
  }

  isValidInput(userInput) {
    return /^\d{3}$/.test(userInput) &&
      new Set(userInput.split('')).size === 3;
  }

  calculateResult(userInput) {
    this.attempts++;
    const userNumbers = userInput.split('').map(Number);
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (userNumbers[i] === this.computerNumbers[i]) {
        strike++;
      } else if (this.computerNumbers.includes(userNumbers[i])) {
        ball++;
      }
    }

    if (strike > 0 && ball > 0) {
      return `${ball}볼 ${strike}스트라이크`;
    } else if (strike > 0) {
      return `${strike}스트라이크`;
    } else if (ball > 0) {
      return `${ball}볼`;
    } else {
      return '낫싱';
    }
  }
}

const app = new App();
app.play();
module.exports = App;
