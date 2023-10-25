const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  startGameMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  generateRandomNumber() {
    this.computerNumbers = [];
    while (this.computerNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
    return this.computerNumbers;
  }

  validateUserInput(userInput) {
    if (userInput.length !== 3) return false;
    for (const num of userInput) {
      if (isNaN(num) || num < 1 || num > 9) return false;
    }
    return true;
  }

  async getNumberInput() {
    const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
    if (!this.validateUserInput(userInput)) {
      throw new Error('[ERROR]');
    }
    return userInput;
  }

  checkBaseBallResult(computerNumbers, userInput) {
    let strike = 0;
    let ball = 0;
    let result = '';
    for (let i = 0; i < computerNumbers.length; i++) {
      if (computerNumbers[i] === parseInt(userInput[i], 10)) {
        strike += 1;
      } else if (computerNumbers.includes(parseInt(userInput[i], 10))) {
        ball += 1;
      }
    }
    if (ball === 0 && strike === 0) {
      return '낫싱';
    }
    if (ball > 0) {
      result += `${ball}볼 `;
    }
    if (strike > 0) {
      result += `${strike}스트라이크`;
    }
    return result.trim();
  }

  displayResult(result) {
    Console.print(result);
  }

  async selectRestart() {
    const userInput = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    if (userInput.trim() !== '1' && userInput.trim() !== '2') {
      throw new Error('[ERROR]');
    }
    return userInput.trim() === '1';
  }

  restartGame() {
    this.computerNumbers = this.generateRandomNumber();
  }

  async play() {
    let isRestart = true;
    this.startGameMessage();
    this.generateRandomNumber();
    while (isRestart) {
      const userInput = await this.getNumberInput();
      const result = this.checkBaseBallResult(this.computerNumbers, userInput);
      this.displayResult(result);
      if (result === '3스트라이크') {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        isRestart = await this.selectRestart();
        if (isRestart) {
          this.restartGame();
        } else {
          isRestart = false;
        }
      }
    }
  }
}

module.exports = App;