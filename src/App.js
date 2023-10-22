import { Console, Random } from "@woowacourse/mission-utils";
import { ERROR } from "./lib/constants/error.js";
import { MESSAGE } from "./lib/constants/message.js";
import { WORD } from "./lib/constants/word.js";

class App {
  async play() {
    this.startGame();
  }

  startGame() {
    Console.print(MESSAGE.START);
  }
}

const app = new App();
app.play();

module.exports = App;
