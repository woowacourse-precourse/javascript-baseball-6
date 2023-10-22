import Baseball from "./Baseball.js";
import { Console } from "@woowacourse/mission-utils";
import { Messages } from "./Messages.js";
import { RUNNING_GAME, RESTART_GAME, END_GAME } from "./GameState.js";

class Game {
  constructor() {
    this.answerBaseball = new Baseball();
    this.guessBaseball;
    this.gameState = 0;
  }

  async runGame() {
    while (this.gameState == 0) {
      try {
        if (await this.runSingleGuess()) throw new Error("[ERROR]");
      } catch (e) {
        throw e;
      }
    }
    return this.gameState;
  }

  async runSingleGuess() {
    if (await this.getGuess()) return true;
    const result = Baseball.compareBaseball(
      this.guessBaseball,
      this.answerBaseball
    );
    this.tellResult(result);
    await this.endGame(result);
  }

  async getGuess() {
    const guess = await Console.readLineAsync(Messages.GET_GUESS);
    try {
      this.guessBaseball = new Baseball(guess);
    } catch (e) {
      return true;
    }
  }

  tellResult(result) {
    let message = "";
    if (result.out) message = Messages.OUT;
    else {
      if (result.ball > 0) message += `${result.ball}${Messages.BALL} `;
      if (result.strike > 0) message += `${result.strike}${Messages.STRIKE}`;
    }
    Console.print(message);
  }

  async endGame(result) {
    if (result.strike != 3) return;
    this.gameState = await Console.readLineAsync(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n" +
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
  }
}

export default Game;
