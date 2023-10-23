import { Console } from "@woowacourse/mission-utils";
import GameModel from "../models/GameModel.js";

class GameView {
  constructor() {
    this.model = new GameModel();
  }

  async readUserInput() {
    return await Console.readLineAsync("숫자를 입력해주세요 : ");
  }

  async readReplayInput() {
    return await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
  }

  printGameWin() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }

  printGameOver() {
    Console.print("게임 종료");
  }

  printError() {
    throw new Error("[ERROR] 잘못된 입력입니다.");
  }

  printHint(computerAnswer, userAnswer) {
    const strike = this.model.getStrike(computerAnswer, userAnswer);
    const ball = this.model.getBall(computerAnswer, userAnswer) - strike;

    if (strike + ball === 0) {
      Console.print(`낫싱`);
    } else if (strike === 0) {
      Console.print(`${ball}볼`);
    } else if (ball === 0) {
      Console.print(`${strike}스트라이크`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }
}

export default GameView;
