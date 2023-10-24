import { Console } from "@woowacourse/mission-utils";
import { CONSTANT } from "../constants/constant";
import { GAMEMESSAGE, RESULTMESSAGE } from "../constants/Message";
import Computer from "../models/Computer";

export default class GameControl {
  constructor(app) {
    this.app = app;
    this.computer = new Computer();
  }

  startGame() {
    Console.print(GAMEMESSAGE.startGame);
  }

  assignComputerNumber() {
    this.app.computerNumber = this.computer.generateNumber();
  }
  
  compareAndPrintResult(userNumber) {
    const computerDigits = String(this.app.computerNumber).split("");
    const userDigits = String(userNumber).split("");
    
    const strike = this.calculateStrikes(computerDigits, userDigits);
    const ball = this.calculateBalls(computerDigits, userDigits) - strike;

    return this.printResult(strike, ball);
  }

  calculateStrikes(computerDigits, userDigits) {
    let strikeCount = 0;

    for (let i = 0; i < computerDigits.length; i++) {
      if (computerDigits[i] === userDigits[i]) {
        strikeCount++;
      }
    }

    return strikeCount;
  }

  calculateBalls(computerDigits, userDigits) {
    let ballCount = 0;

    for (let num of userDigits) {
      if (computerDigits.includes(num)) {
        ballCount++;
      }
    }

    return ballCount;
  }

  printResult(strike, ball) {
    if (strike === CONSTANT.selectNumber) {
      Console.print("3스트라이크");
      Console.print(GAMEMESSAGE.correctGame);
      return true;
    }

    if (strike === 0 && ball === 0) {
      Console.print(RESULTMESSAGE.nothing);
      return false;
    }
    
    const resultMessages = [];
    if (ball > 0) resultMessages.push(`${ball}${RESULTMESSAGE.ball}`);
    if (strike > 0) resultMessages.push(`${strike}${RESULTMESSAGE.strike}`);
    Console.print(resultMessages.join(' '));

    return false;    
  }

  stopGame() {
    this.app.isPlaying = false;
    Console.print(GAMEMESSAGE.endGame);
  }
}
