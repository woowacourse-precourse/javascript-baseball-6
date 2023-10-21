import { MissionUtils } from '@woowacourse/mission-utils';
import UserInput from './UserInput.js';

class BaseballGame {
  constructor() {
    this.targetNumbers = this.generateRandomNumbers();
    console.log(this.targetNumbers);
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

  async play() {
    while (true) {
      const userInput = await UserInput.getUserInputAsync();
      const result = this.calculateResult(userInput);
      this.printResult(result);
    }
  }

  calculateResult(userNumbers) {
    const userNumberArray = userNumbers.split('').map(Number);
    const targetNumberArray = this.targetNumbers;

    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (userNumberArray[i] === targetNumberArray[i]) {
        strikes++;
      } else if (targetNumberArray.includes(userNumberArray[i])) {
        balls++;
      }
    }

    return { strikes, balls };
  }

  printResult(result) {
    let resultMessage = '';

    if (result.strikes > 0) {
      resultMessage += `${result.strikes}스트라이크 `;
    }

    if (result.balls > 0) {
      resultMessage += `${result.balls}볼 `;
    }

    if (result.strikes === 0 && result.balls === 0) {
      resultMessage = '낫싱';
    }

    MissionUtils.Console.print(resultMessage);
  }
}

export default BaseballGame;
