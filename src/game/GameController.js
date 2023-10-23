import { MissionUtils } from "@woowacourse/mission-utils";
import GameLogic from "./GameLogic.js";

class GameController {
  constructor() {
    this.gameLogic = new GameLogic();
  }

  async startGame() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await this.playGame();
  }

  async playGame() {
    let computerNumber = this.gameLogic.createComputerNumber();
  }
}

export default GameController;