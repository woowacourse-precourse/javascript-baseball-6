import BaseballGame from './BaseballGame.js';
import { Console } from '@woowacourse/mission-utils';
import { CONSTANT, ERROR, MESSAGE, RESULT } from './Constant.js';
import Validator from './Validator.js';

class App {
  #game;

  constructor() {
    this.#game = new BaseballGame();
  }

  async play() {
    Console.print(MESSAGE.START_GAME);
    await this.gameLoop();
  }

  async gameLoop() {
    while (true) {
      const userNumbers = await this.getUserGuessInput();
      const result = this.printNumberOfMatches(userNumbers);
      const isAnswer = this.checkIsAnswer(result);
      if (isAnswer === true) break;
    }
    await this.guessRestart();
  }

  async getUserGuessInput() {
    const inputNumbers = await Console.readLineAsync(MESSAGE.ENTER_NUMBERS);
    const splitNumbers = this.splitUserInput(inputNumbers);
    this.validateUserInput(splitNumbers);
    return splitNumbers;
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
  }

  printNumberOfMatches(userNumbers) {
    const result = this.#game.compareUserNumbersWithAnswer(userNumbers);
    Console.print(result);
    return result;
  }

  checkIsAnswer(result) {
    if (result === RESULT.THREE_STRIKE) {
      Console.print(MESSAGE.CORRECT_ANSWER);
      return true;
    }
    return false;
  }

  async guessRestart() {
    const input = await Console.readLineAsync(MESSAGE.WANT_RESTART);
    const num = Number(input);
    this.validateRestartInput(num);
    if (num === CONSTANT.RESTART_GAME) await this.restart();
  }

  validateRestartInput(input) {
    if (!Validator.checkIsOneOrTwo(input)) {
      throw new Error(ERROR.NOT_ONE_OR_TWO);
    }
  }

  async restart() {
    this.#game = new BaseballGame();
    await this.gameLoop();
  }
}

const app = new App();
app.play();

export default App;
