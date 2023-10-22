import { MissionUtils } from "@woowacourse/mission-utils";
import GameLogic from "./GameLogic.js";

class GameManager {
  constructor() {
    this.gameLogic = new GameLogic();
  }

  startGame() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.playGame();
  }

  playGame() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      return this.gameLogic.checkGameResult(answer);
    });
  }

  restartGame() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (answer) => {
        if (answer === 1) {
          this.playGame();
        } else if (answer === 2) {
        }
      }
    );
  }
}

export default GameManager;
