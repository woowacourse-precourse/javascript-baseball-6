import BaseballGame from './BaseballGame.js';
import { Console } from '@woowacourse/mission-utils';
import { ERROR, MESSAGE, RESULT } from './Constant.js';
import Validator from './Validator.js';

class App {
  #game;
  async play() {
    Console.print(MESSAGE.START_GAME);
    this.#game = await new BaseballGame();
    await this.getUserGuessInput();
  }

  async getUserGuessInput() {
    const inputNumbers = await Console.readLineAsync(MESSAGE.ENTER_NUMBERS);
    const userNumbers = this.splitUserInput(inputNumbers);
    this.validateUserInput(userNumbers);
  }

  splitUserInput(input) {
    return input.split('').map(Number);
  }

  validateUserInput(userNumbers) {
    if (!Validator.checkIsNumber(userNumbers)) {
      throw new Error(ERROR.NOT_A_NUMBER);
    }
    if (!Validator.checkIsThreeNumbers(userNumbers)) {
      throw new Error(ERROR.NOT_THREE_NUMBERS);
    }
    if (!Validator.checkHasDuplicate(userNumbers)) {
      throw new Error(ERROR.HAS_DUPLICATE);
    }
    if (Validator.checkHasZero(userNumbers)) {
      throw new Error(ERROR.HAS_ZERO);
    }
    this.printNumberOfMatches(userNumbers);
  }

  printNumberOfMatches(userNumbers) {
    const result = this.#game.compareUserNumbersWithAnswer(userNumbers);
    Console.print(result);
    this.checkIsAnswer(result);
  }

  async checkIsAnswer(result) {
    if (result === RESULT.THREE_STRIKE) {
      Console.print(MESSAGE.CORRECT_ANSWER);
      this.guessRestart();
    } else await this.getUserGuessInput();
  }

  guessRestart() {
    Console.readLineAsync(MESSAGE.WANT_RESTART).then((input) => {
      const num = Number(input);
      this.validateRestartInput(num);
      if (num === 1) this.restart();
    });
  }

  validateRestartInput(input) {
    if (!Validator.checkIsOneOrTwo(input)) {
      throw new Error(ERROR.NOT_ONE_OR_TWO);
    }
  }

  restart() {
    this.#game = new BaseballGame();
    this.getUserGuessInput();
  }
}

const app = new App();
app.play();

export default App;
