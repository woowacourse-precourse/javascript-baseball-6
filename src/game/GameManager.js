import { MissionUtils } from "@woowacourse/mission-utils";
import GameLogic from "./GameLogic.js";

class GameManager {
  constructor() {
    this.gameLogic = new GameLogic();
  }

  gameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.gamePlay();
  }

  gamePlay() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.gameLogic.checkGameResult(answer);
    });
  }
}

export default GameManager;
