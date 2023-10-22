import { MissionUtils } from "@woowacourse/mission-utils";
import GameManager from "./game/GameManager.js";

class App {
  constructor() {
    this.gameManager = new GameManager();
  }

  async play() {
    this.gameManager.gameStart();
  }
}

const app = new App();
app.play();

export default App;
