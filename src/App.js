import { Console, Random } from '@woowacourse/mission-utils';
import * as CONSTANT from './constants.js';

class App {
  async play() {
    let IS_PLAYING = true;
    let computer = this.computerPicksNumber();
    Console.print(CONSTANT.GAME_START_MESSAGE);

    while (IS_PLAYING) {
      let userInput = await this.getUserInput();

      if (!this.validation(userInput)) {
        throw new Error(CONSTANT.INPUT_VALIDATION);
      }
      this.calculateBallAndStrike(computer, userInput);
      if (Number(computer) === Number(userInput)) {
        Console.print(CONSTANT.THREE_NUMBER_CORRECT);
        let userChoice = await this.getUserChoice();
        IS_PLAYING = this.restartOrEnd(userChoice);
        if (IS_PLAYING) {
          computer = this.computerPicksNumber();
        }
      }
    }
  }

  async getUserInput() {
    return Console.readLineAsync(CONSTANT.INPUT_NUMBER);
  }

  async getUserChoice() {
    return Console.readLineAsync(CONSTANT.RESTART_OR_END);
  }

  computerPicksNumber() {
    const computerPickArr = [];

    while (computerPickArr.length < CONSTANT.MAX_DIGITS) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerPickArr.includes(number)) {
        computerPickArr.push(number);
      }
    }
    const computerPick = computerPickArr.join('');
    return computerPick
  }

  restartOrEnd(userChoice) {
    if (userChoice === '1') {
      return true;
    } else if (userChoice === '2') {
      return false;
    } else {
      throw new Error(CONSTANT.NOT_ONE_TWO);
    }
  }
  

  calculateBallAndStrike(computer, userInput) {
    this.init();

    for (let i = 0; i < CONSTANT.MAX_DIGITS; i++) {
      if (computer[i] === userInput[i]) {
        this.strike++;
      } else if (computer.includes(userInput[i])) {
        this.ball++;
      }
    }

    this.printResult();
  }


  printResult() {
    let result = '';

    if (this.ball > 0) {
      result += `${this.ball}볼`;
    }
    if (this.strike > 0 && this.ball > 0) {
      result += ' ';
    }
    if (this.strike > 0) {
      result += `${this.strike}스트라이크`;
    }
    Console.print(result || '낫싱');
  }

  init() {
    this.ball = 0;
    this.strike = 0;
  }

  validation(input) {
    if (input.length !== CONSTANT.MAX_DIGITS) {
      return false;
    }
    if (new Set(input).size !== CONSTANT.MAX_DIGITS) {
      return false;
    }
    if (Number.isNaN(Number(input))) {
      return false;
    }
    if (input.includes(0)) {
      return false;
    }

    return true;
  }
}

export default App;