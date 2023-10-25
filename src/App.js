import { Random, Console } from '@woowacourse/mission-utils';
import { ErrorMessage, ConsoleMessage } from './Messages.js';

class App {
  #computer;
  static DIGITS_COUNT = 3;
  static MIN_DIGIT = 1;
  static MAX_DIGIT = 9;
  static RESTART_GAME = 1;
  static GAME_OVER = 2;

  async play() {
    this.init();
    this.playBaseball(this.computer);
  }

  init() {
    this.computer = this.getRandomComputerNumber();
    Console.print(ConsoleMessage.startGame);
  }

  async playBaseball(computer) {
    const user = await this.getUserNumber();
    const score = this.getScore(computer, user);
    const result = this.printResult(score);
    this.restartGame(result);
  }

  getRandomComputerNumber() {
    const computer = [];
    while (computer.length < App.DIGITS_COUNT) {
      const num = Random.pickNumberInRange(App.MIN_DIGIT, App.MAX_DIGIT);
      if (!computer.includes(num)) {
        computer.push(num);
      }
    }
    return computer;
  }

  async getUserNumber() {
    const user = await Console.readLineAsync(ConsoleMessage.userNumber);
    const checkedNum = this.checkDifferentThreeDigits(user.trim());
    const parsedNum = checkedNum.map((v) => parseInt(v));
    return parsedNum;
  }

  checkDifferentThreeDigits(user) {
    if (isNaN(user)) throw new Error(ErrorMessage.oneOrTwo);
    const array = user.split('');
    if (array.length > App.DIGITS_COUNT || array.length < App.DIGITS_COUNT)
      throw new Error(ErrorMessage.threeDigits);
    const dupCheck = array.filter((v, i) => user.indexOf(v) === i);
    if (dupCheck.includes('0')) throw new Error(ErrorMessage.oneToNine);
    if (dupCheck.length < App.DIGITS_COUNT)
      throw new Error(ErrorMessage.differentDigits);
    return dupCheck;
  }

  getScore(computer, user) {
    const result = { strike: 0, ball: 0 };
    computer.forEach((v, i) => {
      if (v === user[i]) return result.strike++;
      if (v !== user[i] && user.includes(v)) return result.ball++;
    });
    return result;
  }

  printResult(score) {
    const { strike, ball } = score;
    if (strike && ball) Console.print(`${strike}스트라이크 ${ball}볼`);
    if (strike && !ball) Console.print(`${strike}스트라이크`);
    if (!strike && ball) Console.print(`${ball}볼`);
    if (!strike && !ball) Console.print('낫싱');

    if (strike === App.DIGITS_COUNT) return true;
    else return false;
  }

  restartGame(result) {
    if (result) {
      Console.print(ConsoleMessage.allCorrect);
      this.endGame();
    } else {
      this.playBaseball(this.computer);
    }
  }

  async endGame() {
    const num = await Console.readLineAsync(ConsoleMessage.resumeGame);
    this.checkEndNum(num);
  }

  checkEndNum(num) {
    const result = parseInt(num);
    if (result === App.RESTART_GAME) {
      this.play();
    } else if (result === App.GAME_OVER) {
      return;
    } else {
      throw new Error(ErrorMessage.oneOrTwo);
    }
  }
}
const app = new App();
app.play();
export default App;
