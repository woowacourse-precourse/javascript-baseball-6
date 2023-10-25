import { Console } from "@woowacourse/mission-utils";
import BaseballGame from "./baseballGame.js";
import { MESSAGES } from "./message.js";

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  async play() {
    Console.print(MESSAGES.START);

    await this.baseballGame.start();
  }
}

const app = new App();
app.play();

export default App;
