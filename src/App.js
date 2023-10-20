import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constant/MESSAGE.js";

class App {
  async play() {
    this.startGame();
  }

  printMessage(message) {
    Console.print(message);
  }

  startGame() {
    this.printMessage(MESSAGE.START);
  }
}

export default App;
