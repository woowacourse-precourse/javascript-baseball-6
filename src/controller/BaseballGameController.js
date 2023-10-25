import Computer from '../model/Computer';
import Player from '../model/Player';
import GameResult from '../model/GameResult';
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';

class BaseballGameController {
  #computer;
  #player;
  #gameResult;
  #inputView;
  #outputView;

  constructor() {
    this.#computer = new Computer();
    this.#player = new Player();
    this.#gameResult = new GameResult();
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async play() {
    this.startGame();

    while (!this.#gameResult.isCompleteMatch()) {
      const playerNumbers = await this.#inputView.readPlayerNumbers();
      this.#player.resetNumbers(playerNumbers);
      this.compareNumbers();
      this.showGameResult();
    }

    await this.finishGame();
  }

  async startGame() {
    this.#outputView.printStartGame();
    this.#computer.resetNumbers();
  }

  compareNumbers() {
    const computerNumbers = this.#computer.getNumbers();
    const playerNumbers = this.#player.getNumbers();

    this.#gameResult.compareNumbers(computerNumbers, playerNumbers);
  }

  showGameResult() {
    const ball = this.#gameResult.getBall();
    const strike = this.#gameResult.getStrike();

    if (this.#gameResult.isNothing()) {
      this.#outputView.printNothing();
    } else {
      this.#outputView.printHint(ball, strike);
    }
  }

  async finishGame() {
    this.#outputView.printGameEnd();
    this.#gameResult.resetResult();

    const gameCode = await this.#inputView.readPlayerGameCode();
    this.#player.resetGameCode(gameCode);

    if (this.#player.isRestart()) {
      this.play();
    }
  }
}

export default BaseballGameController;
