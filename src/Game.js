import Baseball from "./Baseball.js";
import { Console } from "@woowacourse/mission-utils";
import { Messages } from "./Messages.js";

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
      try {
        if (await this.runSingleGuess()) throw new Error("[ERROR]");
      } catch (e) {
        throw e;
      }
      if (this.isEndGame()) break;
    }
  }

  async runSingleGuess() {
    if (await this.getGuess()) return true;
    this.makeResult();
    this.tellResult();
  }

  async getGuess() {
    const guess = await Console.readLineAsync(Messages.GET_GUESS);
    try {
      this.#guessBaseball = new Baseball(guess);
    } catch (e) {
      return true;
    }
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
    if (out) message = Messages.OUT;
    else {
      if (ball > 0) message += `${ball}${Messages.BALL} `;
      if (strike > 0) message += `${strike}${Messages.STRIKE}`;
    }
    Console.print(message);
  }

  isEndGame() {
    if (this.#result.strike === 3) return true;
    return false;
  }
}

export default Game;
