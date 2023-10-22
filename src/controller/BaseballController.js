import { getPlayerInput, getRetryInput } from '../view/InputView.js';
import Player from '../model/Player.js';
import Computer from '../model/Computer.js';
import Referee from '../model/Referee.js';
import { GAME_OPTION, GAME_SETTINGS } from '../constants/GameSettings.js';
import {
  printGameEnd,
  printGameStart,
  printGameStatus,
} from '../view/OutputView.js';

export default class BaseballController {
  #Player;

  #Computer;

  #Referee;

  constructor() {
    this.#Player = new Player();
    this.#Computer = new Computer();
    this.#Referee = new Referee();
    printGameStart();
  }

  async play() {
    const playerNumberInput = await getPlayerInput();

    this.#Player.setSelectNumber(playerNumberInput);
    return this.#getCompareResults();
  }

  async #getCompareResults() {
    const playerNumber = this.#Player.getSelectNumber();
    const computerNumber = this.#Computer.getSelectNumber();
    const result = this.#Referee.compare(playerNumber, computerNumber);

    return this.#printCompareResults(result);
  }

  async #printCompareResults(result) {
    printGameStatus(result);
    return this.#checkGameFinish(result);
  }

  async #checkGameFinish(result) {
    if (result.strike === GAME_SETTINGS.numberLength) {
      printGameEnd();
      return this.#checkGameRetry();
    }
    return this.play();
  }

  async #checkGameRetry() {
    const playerRetryInput = await getRetryInput();

    if (playerRetryInput === GAME_OPTION.retry) {
      this.#Computer.generate();
      return this.play();
    }
    return 0;
  }
}
