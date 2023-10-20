import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constant/MESSAGE.js";
import Computer from "./Computer.js";
import User from "./User.js";

class App {
  constructor() {
    this.computerNumber = [];
    this.userNumber = [];
  }

  async play() {
    await this.startGame();
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
}

export default App;
