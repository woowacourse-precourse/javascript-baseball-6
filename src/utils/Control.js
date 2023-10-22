import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import { GUIDE_TEXT, NUMBER_SIZE } from '../constant.js';

class Control {
  constructor(app) {
    this.app = app;
    this.computer = new Computer();
  }

  startGame() {
    Console.print(GUIDE_TEXT.START_GAME);
  }

  assignComputerNumber() {
    this.app.computerNumber = this.computer.getComputerChoice();
  }

  compareNumbers(userInput) {
    const COMPUTER = this.app.computerNumber;
    const USER_ARR = String(userInput).split('');
    const COM_ARR = String(COMPUTER).split('');
    const STRIKE = USER_ARR.filter((s, i) => s === COM_ARR[i]).length;
    const BALL = COM_ARR.filter(
      (b, i) => b !== USER_ARR[i] && USER_ARR.includes(b)
    ).length;
    return this.getMessage(STRIKE, BALL);
  }

  getMessage(strike, ball) {
    if (strike === NUMBER_SIZE) {
      Console.print('3스트라이크');
      Console.print(GUIDE_TEXT.CORRECT_ANSWER);
      return true;
    }
    if (strike === 0 && ball === 0) {
      Console.print('낫싱');
    }
    if (strike === 0 && ball !== 0) {
      Console.print(`${ball}볼`);
    }
    if (strike !== 0 && ball === 0) {
      Console.print(`${strike}스트라이크`);
    }
    if (strike !== 0 && ball !== 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    return false;
  }
  
  endGame() {
    this.app.isPlaying = false;
    Console.print(GUIDE_TEXT.END_GAME);
  }
}
export default Control;
