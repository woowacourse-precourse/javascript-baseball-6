import Computer from '../model/Computer';
import Player from '../model/Player';
import GameResult from '../model/GameResult';
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import { playerGameCodeValidator } from '../utils/playerInputValidator';
import { GAME_CODE } from '../constants/constants';

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

    if (ball === 0 && strike === 0) {
      this.#outputView.printNothing();
    } else {
      this.#outputView.printHint(ball, strike);
    }
  }

  async finishGame() {
    this.#outputView.printGameEnd();
    this.#gameResult.resetResult();

    const gameCode = await this.#inputView.readPlayerGameCode();
    playerGameCodeValidator(gameCode);

    if (gameCode === GAME_CODE.restart) {
      this.play();
    }
  }
}

export default BaseballGameController;
