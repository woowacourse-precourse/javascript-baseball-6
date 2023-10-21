import BaseballGame from './BaseballGame.js';
import { Console } from '@woowacourse/mission-utils';
import { ERROR, MESSAGE, RESULT } from './Constant.js';
import Validator from './Validator.js';

class App {
  #game;

  constructor() {
    this.#game = new BaseballGame();
  }

  async play() {
    Console.print(MESSAGE.START_GAME);
    await this.getUserGuessInput();
  }

  async getUserGuessInput() {
    const inputNumbers = await Console.readLineAsync(MESSAGE.ENTER_NUMBERS);
    const userNumbers = this.splitUserInput(inputNumbers);
    await this.validateUserInput(userNumbers);
  }

  splitUserInput(input) {
    return input.split('').map(Number);
  }

  async validateUserInput(userNumbers) {
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
    await this.printNumberOfMatches(userNumbers);
  }

  async printNumberOfMatches(userNumbers) {
    const result = this.#game.compareUserNumbersWithAnswer(userNumbers);
    Console.print(result);
    await this.checkIsAnswer(result);
  }

  async checkIsAnswer(result) {
    if (result === RESULT.THREE_STRIKE) {
      Console.print(MESSAGE.CORRECT_ANSWER);
      await this.guessRestart();
    } else await this.getUserGuessInput();
  }

  async guessRestart() {
    const input = await Console.readLineAsync(MESSAGE.WANT_RESTART);
    const num = Number(input);
    this.validateRestartInput(num);
    if (num === 1) await this.restart();
  }

  validateRestartInput(input) {
    if (!Validator.checkIsOneOrTwo(input)) {
      throw new Error(ERROR.NOT_ONE_OR_TWO);
    }
  }

  async restart() {
    this.#game = new BaseballGame();
    await this.getUserGuessInput();
  }
}

const app = new App();
app.play();

export default App;
