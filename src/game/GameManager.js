import { MissionUtils } from "@woowacourse/mission-utils";
import GameLogic from "./GameLogic.js";
import Exception from "../Exception/Exception.js";

class GameManager {
  constructor() {
    this.gameLogic = new GameLogic();
    this.replay = true;
  }

  startGame() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.playGame();
  }

  async playGame() {
    let computerNumber = this.gameLogic.generateNewNumber();
    let userNumber = "";

    while (true) {
      const answer = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );

      Exception.baseballException(answer);

      userNumber = this.gameLogic.checkGameResult(computerNumber, answer);
      MissionUtils.Console.print(userNumber);

      if (userNumber === "3스트라이크") {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        return this.restartGame();
      }
    }
  }

  async restartGame() {
    const answer = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    if (answer === "1") {
      return this.playGame();
    } else if (answer === "2") {
      return false;
    } else {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}

export default GameManager;
