import { MissionUtils } from "@woowacourse/mission-utils";
import GameLogic from "./GameLogic.js";
import Exception from "../Exception/Exception.js";

class GameManager {
  constructor() {
    this.gameLogic = new GameLogic();
  }

  startGame() {
    const computerNumber = this.gameLogic.generateNewNumber();
    this.playGame(computerNumber);
  }

  async playGame(computerNumber) {
    const answer = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );

    if (computerNumber === answer) {
      return this.strike();
    }
    if (!Exception.baseballException(answer)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    this.checkBall(computerNumber, answer);
  }

  checkBall(computerNumber, userNumber) {
    const checkedResult = this.gameLogic.checkGameResult(
      computerNumber,
      userNumber
    );
    MissionUtils.Console.print(checkedResult);
    this.playGame(computerNumber);
  }

  strike() {
    MissionUtils.Console.print("3스트라이크");
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    this.restartGame();
  }

  async restartGame() {
    const answer = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    if (answer === "1") {
      return this.startGame();
    } else if (answer === "2") {
      return;
    } else {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}

export default GameManager;
