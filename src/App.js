import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constant/MESSAGE.js";
import Computer from "./Computer.js";
import User from "./User.js";
import NUMBER from "./constant/NUMBER.js";

class App {
  constructor() {
    this.computerNumber = [];
    this.userNumber = [];
  }

  async play() {
    await this.startGame();

    let judgeResult = this.calculateResult(
      this.computerNumber,
      this.userNumber
    );

    this.printMessage(this.computerNumber)
      .printMessage("볼 " + judgeResult.ballCount)
      .printMessage("스트라이크: " + judgeResult.strikeCount);
  }

  printMessage(message) {
    Console.print(message);
    return this;
  }

  async startGame() {
    this.printMessage(MESSAGE.START_GAME);
    this.computerNumber = new Computer().selectedNumberArray;
    this.userNumber = await new User().inputNumberArray;
  }

  calculateResult(computer, user) {
    let strikeCount = this.judgeStrike(computer, user);
    let ballCount = this.judgeBall(computer, user);

    return { strikeCount, ballCount };
  }

  judgeStrike(arrayX, arrayY) {
    let strikeCount = 0;
    for (let i = 0; i < NUMBER.LENGTH; i++) {
      if (arrayX[i] === arrayY[i]) strikeCount++;
    }
    return strikeCount;
  }

  judgeBall(arrayX, arrayY) {
    let ballCount = 0;
    for (let i = 0; i < NUMBER.LENGTH; i++) {
      if (arrayX.includes(arrayY[i]) && arrayX[i] !== arrayY[i]) ballCount++;
    }
    return ballCount;
  }
}

export default App;
