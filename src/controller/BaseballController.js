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
    const res = await getPlayerInput();
    this.#Player.setSelectNumber(res);
    return this.#check();
  }

  async #check() {
    const playerNumber = this.#Player.getSelectNumber();
    const computerNumber = this.#Computer.getSelectNumber();
    const result = this.#Referee.compare(playerNumber, computerNumber);

    printGameStatus(result);
    if (result.strike === GAME_SETTINGS.numberLength) {
      return this.#retry();
    }
    return this.play();
  }

  async #retry() {
    printGameEnd();
    const res = await getRetryInput();
    if (res === GAME_OPTION.retry) {
      this.#Computer.generate();
      return this.play();
    }
    return 0;
  }
}
