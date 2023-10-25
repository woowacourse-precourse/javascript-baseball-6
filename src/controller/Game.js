import Answer from "../model/Answer.js";
import OutputView from "../view/outputView.js";
import InputView from "../view/inputView.js";
import Validation from "../validation/validation.js";
import { RESTART_SIGN, EXIT_SIGN, MAX_STRIKE } from "../constants/constants.js";

class Game {
  #answer;
  #input;
  #guessResult;

  constructor() {
    this.#answer = new Answer();
    this.#guessResult = {};
    this.#input = "";
  }

  async startGame() {
    this.#answer.setAnswer();
    OutputView.startMsg();
    await this.turn();
  }

  async guess() {
    this.#input = await InputView.getNumber();
    Validation.inputValidCheck(this.#input);
    return this.#answer.guessNum(this.#input);
  }

  async turn() {
    while (true) {
      this.#guessResult = await this.guess();
      OutputView.resultMsg(this.#guessResult.ball, this.#guessResult.strike);
      if (this.#guessResult.strike === MAX_STRIKE) {
        if (await this.ending()) return 0;
      }
    }
  }
}

export default Game;
