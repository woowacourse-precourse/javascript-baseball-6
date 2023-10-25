import { Random, Console } from '@woowacourse/mission-utils';
import { ErrorMessage, ConsoleMessage } from './Messages.js';

export class BaseballGame {
  static DIGITS_COUNT = 3;
  static MIN_DIGIT = 1;
  static MAX_DIGIT = 9;
  static RESTART_GAME = 1;
  static GAME_OVER = 2;

  constructor() {
    this.computer = null;
  }

  initialStart() {
    this.init();
    Console.print(ConsoleMessage.START_GAME);
    return this.playBaseball();
  }

  init() {
    this.computer = this.getRandomComputerNumber();
  }

  async playBaseball() {
    let result = false;
    while (!result) {
      const user = await this.getUserNumber();
      const score = this.getScore(user);
      result = this.printResult(score);
    }
    await this.restartGame(result);
  }

  getRandomComputerNumber() {
    const computer = [];
    while (computer.length < BaseballGame.DIGITS_COUNT) {
      const num = Random.pickNumberInRange(
        BaseballGame.MIN_DIGIT,
        BaseballGame.MAX_DIGIT
      );
      if (!computer.includes(num)) {
        computer.push(num);
      }
    }
    return computer;
  }

  async getUserNumber() {
    const user = await Console.readLineAsync(ConsoleMessage.USER_NUMBER);
    return this.validateUserDigits(user);
  }

  validateUserDigits(user) {
    this.validateFromOneToNine(user);
    this.validateThreeDigitsOnly(user);
    this.validateDifferentDigits(user);
    const allChecked = user.split('');
    return allChecked.map((v) => parseInt(v));
  }

  validateFromOneToNine(user) {
    const regExg = /^[1-9]+$/;
    if (!regExg.test(user))
      throw new Error(ErrorMessage.VALID_FROM_ONE_TO_NINE);
  }

  validateThreeDigitsOnly(user) {
    if (user.length !== BaseballGame.DIGITS_COUNT)
      throw new Error(ErrorMessage.THREE_DIGITS_ONLY);
  }

  validateDifferentDigits(user) {
    const array = user.split('');
    const dupChecked = array.filter((v, i) => user.indexOf(v) === i);
    if (dupChecked.length < BaseballGame.DIGITS_COUNT)
      throw new Error(ErrorMessage.MUST_DIFFERENT_DIGITS);
  }

  getScore(user) {
    const result = { strike: 0, ball: 0 };
    this.computer.forEach((v, i) => {
      if (v === user[i]) return result.strike++;
      if (v !== user[i] && user.includes(v)) return result.ball++;
    });
    return result;
  }

  printResult(score) {
    const { strike, ball } = score;
    if (strike && ball) Console.print(`${ball}볼 ${strike}스트라이크`);
    if (strike && !ball) Console.print(`${strike}스트라이크`);
    if (!strike && ball) Console.print(`${ball}볼`);
    if (!strike && !ball) Console.print('낫싱');

    if (strike === BaseballGame.DIGITS_COUNT) {
      Console.print(ConsoleMessage.ALL_CORRECT);
      return true;
    } else return false;
  }

  restartGame(result) {
    if (result) return this.endGame();
    else return this.playBaseball();
  }

  async endGame() {
    const num = await Console.readLineAsync(ConsoleMessage.RESTART_GAME_OR_NOT);
    return this.validateAnswer(num);
  }

  validateAnswer(num) {
    const answer = parseInt(num);
    if (answer === BaseballGame.RESTART_GAME) {
      this.init();
      return this.playBaseball();
    } else if (answer === BaseballGame.GAME_OVER) return;
    else throw new Error(ErrorMessage.ONE_OR_TWO_ONLY);
  }
}
