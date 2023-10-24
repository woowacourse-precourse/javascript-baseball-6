import Baseball from "./Baseball.js";
import { Console } from "@woowacourse/mission-utils";
import { GameMessages } from "./Messages.js";

class Game {
  #answerBaseball;
  #guessBaseball;
  #result;

  constructor() {
    this.#answerBaseball = new Baseball();
    this.#guessBaseball;
    this.#result;
  }

  async runGame() {
    while (true) {
      await this.runSingleGuess();
      if (this.isEndGame()) break;
    }
  }

  async runSingleGuess() {
    if (await this.getGuess()) return true;
    this.makeResult();
    this.tellResult();
  }

  async getGuess() {
    const guess = await Console.readLineAsync(GameMessages.GET_GUESS);
    this.#guessBaseball = new Baseball(guess);
  }

  makeResult() {
    this.#result = Baseball.compareBaseball(
      this.#guessBaseball,
      this.#answerBaseball
    );
  }

  tellResult() {
    const { strike, ball, out } = { ...this.#result };

    let message = "";
    if (out) message = GameMessages.OUT;
    else {
      if (ball > 0) message += `${ball}${GameMessages.BALL} `;
      if (strike > 0) message += `${strike}${GameMessages.STRIKE}`;
    }
    Console.print(message);
  }

  isEndGame() {
    if (this.#result.strike === 3) return true;
    return false;
  }
}

export default Game;
