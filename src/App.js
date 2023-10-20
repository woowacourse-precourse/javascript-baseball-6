import BaseballGame from "./BaseballGame.js";
import { INFO_MESSAGE } from "./constants/message.js";

import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print(INFO_MESSAGE.START_MESSAGE);
    this.baseballGame = new BaseballGame();
  }
}

const app = new App();
app.play();

export default App;
