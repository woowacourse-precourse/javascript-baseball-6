import Game from "./GameControl.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.game = new Game();
  }

  async play() {
    this.game.randomNum();
    this.game.isNumber_Same();
  }
}

new App().play();

export default App;
