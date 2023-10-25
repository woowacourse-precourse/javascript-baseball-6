import { MissionUtils } from "@woowacourse/mission-utils";
import GameManager from "./game/GameManager.js";

class App {
  constructor() {
    this.gameManager = new GameManager();
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.gameManager.startGame();
  }
}

export default App;
