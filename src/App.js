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
    this.startGame();
    this.computerNumber = new Computer().createNumbers();
    this.userNumber = await new User().getValidatedInput();
  }

  printMessage(message) {
    Console.print(message);
  }

  startGame() {
    this.printMessage(MESSAGE.START_GAME);
  }
}

export default App;
