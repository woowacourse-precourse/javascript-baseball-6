import { MissionUtils } from '@woowacourse/mission-utils';
import UserInput from './UserInput.js';
import { GAME_MESSAGES, NUMBER_COUNT, VALID_USER_INPUTS } from './constants.js';

class BaseballGame {
  constructor() {
    this.targetNumbers = this.generateRandomNumbers();
  }

  generateRandomNumbers() {
    const computer = [];
    while (computer.length < NUMBER_COUNT) {
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

      if (result.strikes === NUMBER_COUNT) {
        MissionUtils.Console.print(GAME_MESSAGES.WIN);
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

    for (let i = 0; i < NUMBER_COUNT; i++) {
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
      resultMessage = GAME_MESSAGES.NOTHING;
    }

    MissionUtils.Console.print(resultMessage);
  }

  async endGame() {
    const playAgain = await UserInput.playAgainInputAsync();
    if (playAgain === VALID_USER_INPUTS.RESTART) {
      this.reset();
      this.play();
    }
  }

  reset() {
    this.targetNumbers = this.generateRandomNumbers();
  }
}

export default BaseballGame;
