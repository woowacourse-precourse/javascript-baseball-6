import BaseballGame from "../Models/BaseballGame";
import InputView from "../Views/InputView";
import OutputView from "../Views/OutputView";

export default class BaseballGameController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    const baseballGame = new BaseballGame();
    baseballGame.setNewAnswer();
  }
}
