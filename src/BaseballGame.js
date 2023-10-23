import { MissionUtils } from '@woowacourse/mission-utils';
import UserInput from './UserInput.js';

class BaseballGame {
  constructor() {
    this.targetNumbers = this.generateRandomNumbers();
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

      if (result.strikes === 3) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        await this.endGame();
        break;
      }
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

    if (result.balls > 0) {
      resultMessage += `${result.balls}볼 `;
    }

    if (result.strikes > 0) {
      resultMessage += `${result.strikes}스트라이크 `;
    }

    if (result.strikes === 0 && result.balls === 0) {
      resultMessage = '낫싱';
    }

    MissionUtils.Console.print(resultMessage);
  }

  async endGame() {
    const playAgain = await UserInput.playAgainInputAsync();
    if (playAgain === '1') {
      this.reset();
      this.play();
    }
  }

  reset() {
    this.targetNumbers = this.generateRandomNumbers();
  }
}

export default BaseballGame;
