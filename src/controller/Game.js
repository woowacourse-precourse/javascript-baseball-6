import Answer from "../model/Answer.js";
import OutputView from "../view/outputView.js";
import InputView from "../view/inputView.js";

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
}

export default Game;
